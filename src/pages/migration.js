import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@theme/Layout';

function Example() {
    const iframeStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 'none',
        objectFit: 'contain', // 根据需要调整
    };

    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: 0,
        paddingBottom: '56.25%', // 16:9 宽高比，根据需要调整
    };
    return (
        <Layout>
            <div style={containerStyle}>
                <iframe src="/zengjunwen.github.io-master/index.html" title="Example" style={iframeStyle} />
            </div>
        </Layout>
    );
}

export default Example;