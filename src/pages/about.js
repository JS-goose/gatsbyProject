import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import {Link} from 'gatsby';

export default () => (
    <>
    <Layout>
    <Header siteTitle="BACON!"></Header>
    <Header siteTitle="BACON are good!" dingwall="Hell yeah boy!"></Header>
    <Link to="/">Back to Home</Link>
    <div className="bacon">
        <h1 className="baconlover">
            BACON BACON BACON!
        </h1>
    </div>
    </Layout>
    </>
)