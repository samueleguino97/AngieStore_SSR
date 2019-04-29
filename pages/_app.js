import React from 'react';
import App, { Container } from 'next/app';
import NProgress from 'nprogress'
import Router from 'next/router'
import PageLayout from '../components/layout';

Router.events.on('routeChangeStart', url => {
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>

                <PageLayout>
                    <Component {...pageProps} />
                </PageLayout>
            </Container>
        );
    }
}

export default MyApp;