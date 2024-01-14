---
slug: Moego测试题
title: Moego测试题
authors:
  name: Jon
  title: 😌
  url: https://github.com
  image_url: https://avatars.githubusercontent.com/u/21982782?s=96&v=4
tags: [Code]

---

### 任务调度

输入为任务列表和二元列表，输出为任务的执行顺序。例如：
输入：["A", "B", "C", "D"]，[["A", "C"], ["C", "B"], ["D", "A"]]，输出：["B", "C", "A", "D"]

```go
package main

import (
    "fmt"
    "reflect"
)

func orchestrate(tasks []string, dependencies [][]string) (result []string, isDAG bool) {
    // step 1: init task graph and task degree dict
    taskGraph := make(map[string][]string)
    taskDegree := make(map[string]uint)
    for _, task := range tasks {
        taskDegree[task] = 0
        taskGraph[task] = []string{}
    }
    for _, dep := range dependencies {
        childTask, parentTask := dep[0], dep[1]
        taskGraph[parentTask] = append(taskGraph[parentTask], childTask)
        taskDegree[childTask]++
    }

    // step 2: init task queue for BFS
    var taskQueue []string
    for _, task := range tasks {
        if taskDegree[task] == 0 {
            result = append(result, task)
            taskQueue = append(taskQueue, task)
        }
    }

    // step 3: pop element form taskQueue and BFS that will add new element to taskQueue
    cnt := 0
    for len(taskQueue) > 0 {
        task := taskQueue[0]
        taskQueue = taskQueue[1:]
        cnt++
        for _, child := range taskGraph[task] {
            taskDegree[child]--
            if taskDegree[child] == 0 {
                taskQueue = append(taskQueue, child)
                result = append(result, child)
            }
        }
    }

    return result, cnt == len(tasks)
}

func test(tasks []string, dependencies [][]string, expected []string) {
    result, _ := orchestrate(tasks, dependencies)
    if !reflect.DeepEqual(result, expected) {
        panic(fmt.Sprintf("Expected %v but got %v", expected, result))
    }
}

func main() {
    test(
        []string{"A", "B", "C", "D"},
        [][]string{{"A", "C"}, {"C", "B"}, {"D", "A"}},
        []string{"B", "C", "A", "D"},
    )
    test(
        []string{"A", "B", "C"},
        [][]string{{"B", "A"}, {"A", "C"}},
        []string{"C", "A", "B"},
    )
    test(
        []string{"A", "B", "C"},
        [][]string{{"C", "A"}, {"B", "A"}, {"B", "C"}},
        []string{"A", "C", "B"},
    )
    test(
        []string{"A", "B", "C"},
        [][]string{{"C", "A"}, {"B", "C"}, {"B", "A"}},
        []string{"A", "C", "B"},
    )
    fmt.Println("PASSED!")
}
```

### 将数字表述为中文表达。

例如：
1000中文表达为 "一千",
1234_5678_9098_7654中文表达为"一千二百三十四万五千六百七十八亿九千零九十八万七千六百五十四",
1000_0000_0000_0002中文表达为"一千万亿零二"

```go
package main

import "strconv"

var ChineseDigits = [...]string{"零", "一", "二", "三", "四", "五", "六", "七", "八", "九"}
var SmallUnit = [...]string{"", "十", "百", "千"}
var BigUnit = [...]string{"", "万", "亿"}

// ChineseNumber we use "+" to concat string. we should use strings.Builder when need efficient
func ChineseNumber(num int64) string {
    result := parseBigUnit(num)

    return result
}

func parseBigUnit(num int64) string {
    var bigUnitPos = 0
    var cleanZero = false
    var result string

    // parse big unit
    for num > 0 {
        section := num % 10000
        num /= 10000

        var smallUnitStr string
        smallUnitStr, cleanZero = parseSmallUnit(int(section))

        if len(smallUnitStr) > 0 || bigUnitPos == 2 {
            result = smallUnitStr + BigUnit[bigUnitPos] + result
        }

        bigUnitPos++
        if bigUnitPos%3 == 0 {
            bigUnitPos = 1
        }
    }

    // clean zero
    if cleanZero {
        result = result[1:]
    }
    return result
}

func parseSmallUnit(num int) (result string, zeroPre bool) {
    smallUnitPos := 0
    cnt := 0

    // parse small unit
    for num > 0 {
        cnt++
        digit := num % 10
        if digit > 0 {
            result = ChineseDigits[digit] + SmallUnit[smallUnitPos] + result
            zeroPre = false
        } else {
            if !zeroPre && len(result) > 0 {
                result = ChineseDigits[digit] + result
                zeroPre = true
            }
        }
        num /= 10
        smallUnitPos++
    }

    // add zero
    if 0 < cnt && cnt < 3 {
        result = ChineseDigits[0] + result
        zeroPre = true
    }

    return result, zeroPre
}

func main() {
    cases := map[int64]string{
        1000:                "一千",
        1234_5678_9098_7654: "一千二百三十四万五千六百七十八亿九千零九十八万七千六百五十四",
        1000_0000_0000_0002: "一千万亿零二",
    }
    for k, v := range cases {
        str := ChineseNumber(k)
        if v != str {
            panic("expected value for " + strconv.Itoa(int(k)) + " was " + v + ", but got " + str)
        }
    }
    println("PASSED!")
}
```
