"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2448],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,g=p["".concat(s,".").concat(m)]||p[m]||f[m]||a;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8669:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={},i=void 0,c={permalink:"/blog/2023/07/13/\u6742\u8bb0/Vagrant",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/\u6742\u8bb0/2023-07-13-Vagrant.md",source:"@site/blog/\u6742\u8bb0/2023-07-13-Vagrant.md",title:"Vagrant",description:"\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a Vagrantfile \u7684\u6587\u4ef6",date:"2023-07-13T00:00:00.000Z",formattedDate:"July 13, 2023",tags:[],readingTime:1.085,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"2023-08-14 ARTS",permalink:"/blog/2023-08-14 ARTS"},nextItem:{title:"\u672c\u5730\u7f16\u8bd1K8s",permalink:"/blog/2023/07/12/K8s/\u672c\u5730\u7f16\u8bd1K8s"}},s={authorsImageUrls:[]},l=[],u={toc:l},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a Vagrantfile \u7684\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# -*- mode: ruby -*-\n# vi: set ft=ruby :\n\n# All Vagrant configuration is done below. The "2" in Vagrant.configure\n# configures the configuration version (we support older styles for\n# backwards compatibility). Please don\'t change it unless you know what\n# you\'re doing.\nVagrant.configure("2") do |config|\n  config.vm.define "jw"\n  config.vm.box = "ubuntu/20.04.1TLS"\n  # config.vm.box_check_update = false\n\n  #config.vm.network "forwarded_port", guest: 26379, host: 26379\n  #config.vm.network "forwarded_port", guest: 26479, host: 26479\n  #config.vm.network "forwarded_port", guest: 26579, host: 26579\n  #config.vm.network "forwarded_port", guest: 6379, host: 6379\n  #config.vm.network "forwarded_port", guest: 6479, host: 6479\n\n  #config.vm.network "forwarded_port", guest: 3306, host: 6606\n  #config.vm.network "forwarded_port", guest: 9094, host: 9094, host_ip: "192.168.33.70"\n  config.vm.network "private_network", ip: "10.10.10.10"\n  config.vm.network "private_network", ip: "192.168.33.70"\n  # config.vm.network "public_network"\n\n  # \u5c06\u5f53\u524d\u76ee\u5f55\u6302\u8f7d\u5230\u865a\u62df\u673a\u7684 /Data \u76ee\u5f55\u4e0b\n  config.vm.synced_folder ".", "/Data", type: "virtualbox"\n\n  config.vm.provider "virtualbox" do |vb|\n  #   # Display the VirtualBox GUI when booting the machine\n  #   vb.gui = true\n  #\n  # Customize the amount of memory on the VM:\n    vb.memory = "1024"\n    vb.customize [ "modifyvm", :id, "--uartmode1", "disconnected" ]\n    vb.cpus = 2\n  end\n\n  if Vagrant::Util::Platform.windows?\n    ansible = \'ansible_local\'\n  else\n    ansible = \'ansible\'\n  end\n\n  config.vm.provision "shell", inline: <<-SHELL\n     sudo setenforce 0\n     sudo chown -R vagrant:vagrant /home/vagrant/go\n     mkdir -p /data/running/admin_server/app\n     sudo ln -sf  /home/vagrant/go/src/git.garena.com/seatalk-server/static_assets/admin/ /data/running/admin_server/app\n  SHELL\nend\n')))}f.isMDXComponent=!0}}]);