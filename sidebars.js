/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const { type } = require('os');

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

module.exports = {
  tutorialSidebar:  ['tutorial-basics/API/MAIN', 'tutorial-extras/APPLE/STATE'],
  apiSidebar: [{type: 'autogenerated', dirName: 'tutorial-basics'}],
  //homeSidebar: [{type: 'autogenerated', dirName: 'Main'}],
  tsSidebar:[{type: 'autogenerated',dirName:'api'}],
  homeSidebar:[
 
    {
      type: 'category',
      collapsible: true,
      collapsed:true,
      label: 'Online Payments',
      items:[
        {
            type:'doc', id: 'Main/Overview'
        },
        {
          type: 'category',
          label: 'Getting Started',
          items: ['Main/OnlinePayments/Getting Started/Quickstart', 'Main/OnlinePayments/Getting Started/StylingPayTheoryFields','Main/OnlinePayments/Getting Started/Errorhandling']
        },
        {
          type: 'doc', id: 'Main/OnlinePayments/CashPayments'
        },
        {
          type:'doc', id: 'Main/OnlinePayments/ACH'
        },
        
        {
          type:'doc', id: 'Main/OnlinePayments/PaymentButton'
        },
        {
          type:'doc', id: 'Main/OnlinePayments/QRCode'
        },
        {
          type:'category',
          label:'Tokenizing Payments',
          items: ['Main/OnlinePayments/Tokenizing/Quickstart','Main/OnlinePayments/Tokenizing/Recalling Payments Method','Main/OnlinePayments/Tokenizing/Making a Payment with Payment Token']
        },
        
      ]
    },
    {
      type: 'category', label: 'After the Payments',
      items: [
        {
          type:'autogenerated', dirName:'Main/afterpayments'
        }
      ]
    },
    {
      type: 'category', label: 'Recurring Payments',
      items: [
        {
          type: 'doc', id: 'Main/Recurring Payments/Overview'
        },
        {
          type: 'doc', id: 'Main/Recurring Payments/Managing Recurring payments'
        },
        {
          type: 'category',label:'Quickstart', 
          items: [
            {
              type: 'autogenerated', dirName:'Main/Recurring Payments/Quickstart'
            }
          ]
        },
        {
          type: 'doc', id: 'Main/Recurring Payments/Manage Recurring Emails'
        },
        
        
      ]
    },
    {
      type: 'category', label: 'Invoicing and Biling',
      items: [
        {
          type:'autogenerated', dirName:'Main/Invoicing and Billing'
        }
      ]
    },
    {
      type: 'category', label: 'Updates',
      items: [
        {
          type:'autogenerated', dirName:'Main/Updates'
        }
      ]
    } 

  ], 

 
  //onlinepaymentSidebar: [{type:'category',dirName: 'Main/OnlinePayments'}],
  // onlinepaymentSidebar:[{type: 'category', label: 'Online Payment',items:[
  //   'Main/OnlinePayments/CashPayments','Main/OnlinePayments/QRCode','Main/OnlinePayments/ACH','Main/OnlinePayments/PaymentButton','Main/OnlinePayments/Getting Started']}],
  //apiSidebar: ['tutorial-basics/API/CARD_PRESENT', 'tutorial-basics/API/DISPUTE' ],
  //andriodSidebar: ['tutorial-extras/Android_SDK/FUNCTIONS', 'tutorial-extras/Android_SDK/HANDLERS', 'tutorial-extras/Android_SDK/MAIN'],
  andriodSidebar: [{type: 'autogenerated', dirName: 'tutorial-extras/Android_SDK'}],
  //appleSidebar: ['tutorial-extras/APPLE/COMPLETION_HANDLER', 'tutorial-extras/APPLE/FUNCTIONS', 'tutorial-extras/APPLE/INPUTS', 'tutorial-extras/APPLE/STATE', 'tutorial-extras/APPLE/MAIN'],
  appleSidebar:[{type: 'autogenerated', dirName: 'tutorial-extras/APPLE'}],
  javascriptSidebar:[{type:'autogenerated', dirName: 'tutorial-extras/WEB'}],
};