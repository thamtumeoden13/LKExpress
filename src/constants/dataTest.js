export const dataMainMenu = [
    {
        key: '1',
        title: 'Rút tiền',
        icon: 'credit-card',
        type: 'entypo',
        color: '#20a1dc',
        size: 20,
        route: "CashOut",
    },
    {
        key: '2',
        title: 'Chuyển tiền',
        icon: 'file-move',
        type: 'material-community',
        color: '#ec5e54',
        size: 20,
        route: "TransferOut",
    },
    {
        key: '3',
        title: 'Nhận tiền',
        icon: 'bank-transfer-in',
        type: 'material-community',
        color: '#20a1dc',
        size: 50,
        route: "TransferIn",
    },
    {
        key: '4',
        title: 'Nạp ĐT',
        icon: 'mobile',
        type: 'font-awesome',
        color: '#ef9a1e',
        size: 50,
        route: "PhoneRecharge",
    },
    {
        key: '5',
        title: 'Thẻ ĐT',
        icon: 'cards',
        type: 'material-community',
        color: '#efda28',
        size: 50,
        route: "PhoneCard",
    },
    {
        key: '6',
        title: 'ĐT cố định',
        icon: 'phone',
        type: 'font-awesome',
        color: '#e61021',
        size: 50,
        route: "GetAllPhonePermanent",
    },
    {
        key: '7',
        title: 'Thẻ game',
        icon: 'file-text',
        type: 'feather',
        color: '#e61021',
        size: 50,
        route: "GameCard",
    },
    // {
    //     key: '6',
    //     title: 'Vé xem phim',
    //     icon: 'film',
    //     type: 'font-awesome',
    //     color: '#e61021',
    //     size: 50,
    //     route: "MovieTicket",
    // },
    {
        key: '8',
        title: 'Tiền điện',
        icon: 'bolt',
        type: 'font-awesome',
        color: '#fb4c3f',
        size: 50,
        route: "ElectricPaymentUnit",
    },
    {
        key: '9',
        title: 'Tiền nước',
        icon: 'tint',
        type: 'font-awesome',
        color: '#31a5da',
        size: 50,
        route: "WaterProvider",
    },
    // {
    //     key: '9',
    //     title: 'Vé máy bay',
    //     icon: 'aircraft',
    //     type: 'entypo',
    //     color: '#0bad9e',
    //     size: 50,
    //     route: "WaterBill",
    // },
    {
        key: '10',
        title: 'Internet',
        icon: 'broadcast',
        type: 'octicon',
        color: '#0bad9e',
        size: 50,
        route: "Internet",
    },
    {
        key: '11',
        title: 'Vay tiêu dùng',
        icon: 'cc-paypal',
        type: 'font-awesome',
        color: '#e2b52c',
        size: 50,
        route: "GetAllCreditPayment",
    },
    // {
    //     key: '11',
    //     title: 'Truyền hình',
    //     icon: 'tv',
    //     type: 'entypo',
    //     color: '#e2b52c',
    //     size: 50,
    //     route: "TVBill",
    // },
    // {
    //     key: '12',
    //     title: 'Quà mừng',
    //     icon: 'gift',
    //     type: 'feather',
    //     color: 'black',
    //     size: 50,
    //     route: "Gift"
    // },
    {
        key: '12',
        title: 'ĐT trả sau',
        icon: 'phone',
        type: 'font-awesome',
        color: '#e61021',
        size: 50,
        route: "GetAllPhonePostPaid",
    },
    {
        key: '13',
        title: 'Tất cả dịch vụ',
        icon: 'ellipsis-h',
        type: 'font-awesome',
        color: 'black',
        size: 50,
        route: "Service",
    },
]

export const dataHistory = [
    {
        key: 1,
        year: '2019',
        month: '1',
        data: [
            {
                key: 1,
                title: 'Mua Hàng tại Tiki.vn',
                month: '1',
                day: '20',
                hours: '16',
                minute: '40',
                cost: '143.000',
                currency: 'VND',
                icon: "gift",
                type: "feather"
            },
            {
                key: 2,
                title: 'Nap card điên thoại',
                month: '1',
                day: '21',
                hours: '08',
                minute: '00',
                cost: '100.000',
                currency: 'VND',
                icon: "gift",
                type: "feather"
            },
            {
                key: 3,
                title: 'Thanh toán tiền điện',
                month: '1',
                day: '22',
                hours: '17',
                minute: '40',
                cost: '200.000',
                currency: 'VND',
                icon: "gift",
                type: "feather"
            },
            {
                key: 4,
                title: 'Thanh toán tiền nước',
                month: '1',
                day: '22',
                hours: '17',
                minute: '45',
                cost: '50.000',
                currency: 'VND',
                icon: "gift",
                type: "feather"
            },
            {
                key: 5,
                title: 'Thanh toán vé xem phim',
                month: '1',
                day: '22',
                hours: '19',
                minute: '40',
                cost: '165.000',
                currency: 'VND',
                icon: "gift",
                type: "feather"
            },
            {
                key: 6,
                title: 'Thanh toán cước phí internet',
                month: '1',
                day: '23',
                hours: '10',
                minute: '12',
                cost: '200.000',
                currency: 'VND',
                icon: "gift",
                type: "feather"
            },
        ]
    },
    {
        key: 2,
        year: '2019',
        month: '12',
        data: [
            {
                key: 1,
                title: 'Mua thẻ điện thoại',
                month: '12',
                day: '1',
                hours: '7',
                minute: '40',
                cost: '100.000',
                currency: 'VND',
                icon: "gift",
                type: "feather"
            },
            {
                key: 2,
                title: 'Mua Hàng tại Tiki.vn',
                month: '12',
                day: '2',
                hours: '16',
                minute: '40',
                cost: '190.000',
                currency: 'VND',
                icon: "gift",
                type: "feather"
            },
            {
                key: 3,
                title: 'Mua Hàng tại Sendo.vn',
                month: '12',
                day: '3',
                hours: '12',
                minute: '00',
                cost: '59.000',
                currency: 'VND',
                icon: "gift",
                type: "feather"
            },
            {
                key: 4,
                title: 'Mua Hàng tại Lazada.vn',
                month: '12',
                day: '4',
                hours: '11',
                minute: '40',
                cost: '129.000',
                currency: 'VND',
                icon: "gift",
                type: "feather"
            },
            {
                key: 5,
                title: 'Mua Hàng tại BachHoaXanh.com',
                month: '12',
                day: '20',
                hours: '16',
                minute: '40',
                cost: '150.000',
                currency: 'VND',
                icon: "gift",
                type: "feather"
            },
            {
                key: 6,
                title: 'Thanh toán vé máy bay',
                month: '12',
                day: '22',
                hours: '12',
                minute: '50',
                cost: '1.125.000',
                currency: 'VND',
                icon: "gift",
                type: "feather"
            },
            {
                key: 7,
                title: 'Thanh toán vé máy bay',
                month: '12',
                day: '25',
                hours: '12',
                minute: '50',
                cost: '2.125.000',
                currency: 'VND',
                icon: "gift",
                type: "feather"
            },
            {
                key: 8,
                title: 'Chuyển tiền',
                month: '12',
                day: '29',
                hours: '08',
                minute: '00',
                cost: '200.000',
                currency: 'VND',
                icon: "gift",
                type: "feather"
            },
            {
                key: 9,
                title: 'Chuyển tiền',
                month: '12',
                day: '29',
                hours: '08',
                minute: '20',
                cost: '500.000',
                currency: 'VND',
                icon: "gift",
                type: "feather"
            },
        ]
    },
]

export const partnerData = [
    {
        key: '1',
        title: 'SacomBank',
        url_logo: require('@assets/img/logoBank/STB.png')
    },
    {
        key: '2',
        title: 'VietinBank',
        url_logo: require('@assets/img/logoBank/ICB.png')
    },
    {
        key: '3',
        title: 'EximBank',
        url_logo: require('@assets/img/logoBank/EXB.png')
    },
]


export const partnerCreditData = [
    {
        key: '1',
        title: 'Tín dụng MWG',
        url_logo: require('@assets/img/mwgLogo.jpeg')
    },
]

export const categories = () => {
    let array = []
    for (var i = 0; i < 16; i++) {
        array.push({
            id: i,
            name: `category name ${i}`,
            title: `category title ${i}`,
            content: `category content ${i}`,
        })
    }
    return array
}

export const posters = () => {
    let array = []
    for (var i = 0; i < 20; i++) {
        array.push({
            id: i,
            name: `poster name ${i}`,
            title: `poster title ${i}`,
            content: `poster content ${i}`,
            description: `poster description ${i}`,
            image: `https://i.imgur.com/2nCt3Sbl.jpg`,
            categoryID: Math.floor((Math.random() * 16))
        })
    }
    return array
}
