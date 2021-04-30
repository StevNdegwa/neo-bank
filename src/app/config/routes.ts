export default new Map([
    [
        "accounts",
        {
            url: "/accounts",
            label: "Accounts",
            links: [
                { url: "/accounts-summary", label: "Account Summary" },
                { url: "/transaction-accounts", label: "Transaction Accounts" },
                { url: "/deposits", label: "Deposits" },
                { url: "/loans", label: "Loans" },
                { url: "/credit-cards", label: "Credit Cards" },
                { url: "/prepaid-cards", label: "Prepaid Cards" }
            ]
        }
    ],
    [
        "payments",
        {
            url: "/payments",
            label: "Payments",
            links: [
                { url: "/funds-transfers", label: "Funds Transfers" },
                { url: "/kra-payments", label: "KRA Payments" },
                {
                    url: "/pesalink-transfers",
                    label: "PesaLink Transfers",
                    links: [
                        { url: "/send-to-phone", label: "Send to Phone" },
                        { url: "/send-to-card", label: "Send to Card" },
                        { url: "/send-to-account", label: "Send to Account" },
                        { url: "/link-your-phone", label: "Link your Phone" },
                        { url: "/set-primary-account", label: "Set Primary Account" },
                        { url: "/delink-user", label: "Delink User" },
                    ]
                },
                { url: "/airtime-topup", label: "Airtime Topup" },
                { url: "/quick-payments", label: "Quick Payments" },
                {
                    url: "/mobile-money",
                    label: "Mobile Money",
                    links: [
                        { url: "/mobile-money-payment", label: "Mobile Money Payment" },
                        { url: "/quick-mobile-money-payment", label: "Quick Mobile Money Payment" },
                        { url: "/view-mobile-beneficiary", label: "View Mobile Beneficiary" },
                    ]
                },
                { url: "/utility-payments", label: "Utility Payments" },
                {
                    url: "/inquiries",
                    label: "Inquiries",
                    links: [
                        {
                            url: "/view-payments",
                            label: "View Payments",
                            links: [
                                { url: "/my-transactions", label: "My Transactions" },
                                { url: "/view-incomplete-transactions", label: "View Incomplete Transactions" },
                                { url: "/scheduled-transactions", label: "Scheduled Transactions" },
                                { url: "/recurring-transactions", label: "Recurring Transactions" },
                                { url: "/view-all-transactions", label: "View All Transactions" },
                                { url: "/view-kra-payment-history", label: "View KRA Payment History" }
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
                { url:"/mobile-money-beneficiary", label:"Mobile Money Beneficiary" },
                { url:"/transfer-beneficiaries", label:"Transfer Beneficiaries" },
                { url:"/utility-beneficiaries", label:"Utitlity Beneficiaries" }
            ]
        }
    ],
    [
        "service-requests",
        {
            label:"Service Requests",
            url:"/service-requests",
            links:[
                { url:"/service-requests", label:"Service Requests" },
                { url:"/inquiries", label:"Inquiries" }
            ]
        }
    ],
    [
        "personal-financial-management",
        {
            label:"Personal Financial Management",
            url:"/personal-financial-management",
            links:[
                { url:"/manage-goals", label:"Manage Goals" }
            ]
        }
    ]
]);