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
                    .tabs{
                        gap: .25rem;
                        position: fixed;
                        top: 4rem;
                        width: calc(75% - ((var(--doc-sidebar-width)) + 20px));
                        z-index: 100;
                        background-color: #f1f1f1;
                        max-width: 894px;
                        box-shadow: 0 .15rem .5rem #a1a1a12b, 0px -2rem var(--ifm-color-white),0px -1rem var(--ifm-color-white),0px -3rem var(--ifm-color-white),0px -4rem var(--ifm-color-white),0px -5rem var(--ifm-color-white) ;
                      }
                      .docItemCol_node_modules-\@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module, .docItemCol_VOVn{
                        padding-top: calc(var(--ifm-tabs-height) + 1rem);
                      }
                      @media (max-width: 996px) {.tabs {
                       width: calc(100% - ((var(--doc-sidebar-hidden-width)) + 4rem)) !important;
                      }
                      }
                      ul.tabs{
                        background-color: var(--ifm-color-white);
                        border: 1px solid var(--ifm-color-gray-400);
                        border-radius: 8px;
                        padding: 2px;
                        display: flex;
                        justify-content: space-between;
                      }
                      .tabs__item{
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        color: var(--ifm-color-gray-600);
                        align-items: center;
                        font-weight: var(--ifm-font-weight-normal);
                        font-size: var(--ifm-h4-font-size);
                        border: 1px solid transparent;
                        height: var(--ifm-tabs-height);
                      }
                      .tabs__item--active, .tabs__item--active:hover{
                        background-color: var(--ifm-color-gray-900) !important;
                        border: 1px solid var(--ifm-color-gray-900) !important;
                        border-radius: 6px;
                        color: var(--ifm-color-white) !important;
                        pointer-events: none;
                      }
                      .tabs__item:hover{
                        /* border: 1px solid var(--ifm-color-gray-400); */
                        background-color: var(--ifm-color-gray-200);
                        color: var(--ifm-color-gray-900);
                      }
                      .tabItem_node_modules-\@docusaurus-theme-classic-lib-theme-Tabs-styles-module, .tabItem_LNqP{
                        margin: 0 auto !important;
                        
                      }
            `}</style>
        </>
    )
}

export default Tabs
