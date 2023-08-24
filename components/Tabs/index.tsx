import React from "react";
import TabBar, {Props as TabsProps} from '@theme/Tabs';

const Tabs = (props: TabsProps) => {
    return (
        <>
            <TabBar {...props} />
            <style>{`
                    .docItemCol_node_modules-\\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module, .docItemCol_VOVn{
                      padding-top: calc(var(--ifm-tabs-height) + 1rem);
                    }
            `}</style>
        </>
    )
}

export default Tabs
