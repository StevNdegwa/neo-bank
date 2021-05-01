export default new Map([
    [
        "accounts",
        {
            url: "/accounts",
            label: "Accounts",
            links: [
                { url: "/accounts/accounts-summary", label: "Account Summary" },
                { url: "/accounts/transaction-accounts", label: "Transaction Accounts" },
                { url: "/accounts/deposits", label: "Deposits" },
                { url: "/accounts/loans", label: "Loans" },
                { url: "/accounts/credit-cards", label: "Credit Cards" },
                { url: "/accounts/prepaid-cards", label: "Prepaid Cards" }
            ]
        }
    ],
    [
        "payments",
        {
            url: "/payments",
            label: "Payments",
            links: [
                { url: "/payments/funds-transfers", label: "Funds Transfers" },
                { url: "/payments/kra-payments", label: "KRA Payments" },
                {
                    url: "/payments/funds-transfers/pesalink-transfers",
                    label: "PesaLink Transfers",
                    links: [
                        { url: "/payments/funds-transfers/pesalink-transfers/send-to-phone", label: "Send to Phone" },
                        { url: "/payments/funds-transfers/pesalink-transfers/send-to-card", label: "Send to Card" },
                        { url: "/payments/funds-transfers/pesalink-transfers/send-to-account", label: "Send to Account" },
                        { url: "/payments/funds-transfers/pesalink-transfers/link-your-phone", label: "Link your Phone" },
                        { url: "/payments/funds-transfers/pesalink-transfers/set-primary-account", label: "Set Primary Account" },
                        { url: "/payments/funds-transfers/pesalink-transfers/delink-user", label: "Delink User" },
                    ]
                },
                { url: "/payments/airtime-topup", label: "Airtime Topup" },
                { url: "/payments/quick-payments", label: "Quick Payments" },
                {
                    url: "/payments/mobile-money",
                    label: "Mobile Money",
                    links: [
                        { url: "/payments/mobile-money/mobile-money-payment", label: "Mobile Money Payment" },
                        { url: "/payments/mobile-money/quick-mobile-money-payment", label: "Quick Mobile Money Payment" },
                        { url: "/payments/mobile-money/view-mobile-beneficiary", label: "View Mobile Beneficiary" },
                    ]
                },
                { url: "/payments/utility-payments", label: "Utility Payments" },
                {
                    url: "/payments/inquiries",
                    label: "Inquiries",
                    links: [
                        {
                            url: "/payments/inquiries/view-payments",
                            label: "View Payments",
                            links: [
                                { url: "/payments/inquiries/view-payments/my-transactions", label: "My Transactions" },
                                { url: "/payments/inquiries/view-payments/view-incomplete-transactions", label: "View Incomplete Transactions" },
                                { url: "/payments/inquiries/view-payments/scheduled-transactions", label: "Scheduled Transactions" },
                                { url: "/payments/inquiries/view-payments/recurring-transactions", label: "Recurring Transactions" },
                                { url: "/payments/inquiries/view-payments/view-all-transactions", label: "View All Transactions" },
                                { url: "/payments/inquiries/view-payments/view-kra-payment-history", label: "View KRA Payment History" }
                            ]
                        },
                        { url: "/view-topup-transactions", label: "View Topup Transactions" }
                    ]
                }
            ]
        }
    ],
    [
        "beneficiary",
        {
            label:"Manage Beneficiary",
            url:"/beneficiary",
            links:[
                { url:"/beneficiary/mobile-money-beneficiary", label:"Mobile Money Beneficiary" },
                { url:"/beneficiary/transfer-beneficiaries", label:"Transfer Beneficiaries" },
                { url:"/beneficiary/utility-beneficiaries", label:"Utitlity Beneficiaries" }
            ]
        }
    ],
    [
        "service-requests",
        {
            label:"Service Requests",
            url:"/service-requests",
            links:[
                { url:"/service-requests/service-requests", label:"Service Requests" },
                { url:"/service-requests/inquiries", label:"Inquiries" }
            ]
        }
    ],
    [
        "personal-financial-management",
        {
            label:"Personal Financial Management",
            url:"/personal-financial-management",
            links:[
                { url:"/personal-financial-management/manage-goals", label:"Manage Goals" }
            ]
        }
    ]
]);