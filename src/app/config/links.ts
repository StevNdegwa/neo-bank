export default new Map([
    [
        "accounts",
        {
            url: "/banking/accounts",
            label: "Accounts",
            links: [
                { url: "/banking/accounts-summary/", label: "Account Summary" },
                { url: "/banking/accounts/transaction-accounts", label: "Transaction Accounts" },
                { url: "/banking/accounts/deposits", label: "Deposits" },
                { url: "/banking/accounts/loans", label: "Loans" },
                { url: "/banking/accounts/credit-cards", label: "Credit Cards" },
                { url: "/banking/accounts/prepaid-cards", label: "Prepaid Cards" }
            ]
        }
    ],
    [
        "payments",
        {
            url: "/banking/payments",
            label: "Payments",
            links: [
                { url: "/banking/payments/funds-transfers", label: "Funds Transfers" },
                { url: "/banking/payments/kra-payments", label: "KRA Payments" },
                {
                    url: "/banking/payments/funds-transfers/pesalink-transfers",
                    label: "PesaLink Transfers",
                    links: [
                        { url: "/banking/payments/funds-transfers/pesalink-transfers/send-to-phone", label: "Send to Phone" },
                        { url: "/banking/payments/funds-transfers/pesalink-transfers/send-to-card", label: "Send to Card" },
                        { url: "/banking/payments/funds-transfers/pesalink-transfers/send-to-account", label: "Send to Account" },
                        { url: "/banking/payments/funds-transfers/pesalink-transfers/link-your-phone", label: "Link your Phone" },
                        { url: "/banking/payments/funds-transfers/pesalink-transfers/set-primary-account", label: "Set Primary Account" },
                        { url: "/banking/payments/funds-transfers/pesalink-transfers/delink-user", label: "Delink User" },
                    ]
                },
                { url: "/banking/payments/airtime-topup", label: "Airtime Topup" },
                { url: "/banking/payments/quick-payments", label: "Quick Payments" },
                {
                    url: "/banking/payments/mobile-money",
                    label: "Mobile Money",
                    links: [
                        { url: "/banking/payments/mobile-money/mobile-money-payment", label: "Mobile Money Payment" },
                        { url: "/banking/payments/mobile-money/quick-mobile-money-payment", label: "Quick Mobile Money Payment" },
                        { url: "/banking/payments/mobile-money/view-mobile-beneficiary", label: "View Mobile Beneficiary" },
                    ]
                },
                { url: "/banking/payments/utility-payments", label: "Utility Payments" },
                {
                    url: "/banking/payments/inquiries",
                    label: "Inquiries",
                    links: [
                        {
                            url: "/banking/payments/inquiries/view-payments",
                            label: "View Payments",
                            links: [
                                { url: "/banking/payments/inquiries/view-payments/my-transactions", label: "My Transactions" },
                                { url: "/banking/payments/inquiries/view-payments/view-incomplete-transactions", label: "View Incomplete Transactions" },
                                { url: "/banking/payments/inquiries/view-payments/scheduled-transactions", label: "Scheduled Transactions" },
                                { url: "/banking/payments/inquiries/view-payments/recurring-transactions", label: "Recurring Transactions" },
                                { url: "/banking/payments/inquiries/view-payments/view-all-transactions", label: "View All Transactions" },
                                { url: "/banking/payments/inquiries/view-payments/view-kra-payment-history", label: "View KRA Payment History" }
                            ]
                        },
                        { url: "/banking/view-topup-transactions", label: "View Topup Transactions" }
                    ]
                }
            ]
        }
    ],
    [
        "beneficiary",
        {
            label:"Manage Beneficiary",
            url:"/banking/beneficiary",
            links:[
                { url:"/banking/beneficiary/mobile-money-beneficiary", label:"Mobile Money Beneficiary" },
                { url:"/banking/beneficiary/transfer-beneficiaries", label:"Transfer Beneficiaries" },
                { url:"/banking/beneficiary/utility-beneficiaries", label:"Utitlity Beneficiaries" }
            ]
        }
    ],
    [
        "service-requests",
        {
            label:"Service Requests",
            url:"/banking/service-requests",
            links:[
                { url:"/banking/service-requests/service-requests", label:"Service Requests" },
                { url:"/banking/service-requests/inquiries", label:"Inquiries" }
            ]
        }
    ],
    [
        "personal-financial-management",
        {
            label:"Personal Financial Management",
            url:"/banking/personal-financial-management",
            links:[
                { url:"/banking/personal-financial-management/manage-goals", label:"Manage Goals" }
            ]
        }
    ]
]);