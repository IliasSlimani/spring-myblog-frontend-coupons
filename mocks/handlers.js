// src/mocks/handlers.js
import { rest } from 'msw'


export const handlers = [
    rest.get("http://localhost/categories", (req,res,ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                "data" : [{
                    "id": 1,
                    "name": "Shopping",
                    "descriptions": "This Category contains coupons for shopping Websites"
                },
                {
                    "id": 2,
                    "name": "Other",
                    "descriptions": "This Category contains coupons for other Websites"
                }
            ]
            }),
        )
    }),
    rest.get("http://localhost/coupons", (req,res,ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                "data" : [
                    {
                        "id": 5,
                        "name": "ebay 3",
                        "descr": "Amazon coupon for free 5",
                        "long_descr": "Shop for virtually anything on Amazon you might want to buy online including books, movies, music and games, digital downloads, electronics, computers, home and garden, toys, apparel and more.",
                        "tips": "Good tips",
                        "nleft": 100,
                        "rating": "good job",
                        "image": "https://icycoupons.com/img/grid/overwatch-grid.jpg",
                        "type": [
                            "coupon2",
                            "code2"
                        ],
                        "nuses": 700,
                        "tag": [
                            "amazon",
                            "code amazon"
                        ],
                        "nrating": 5
                    },
                    {
                        "id": 6,
                        "name": "bestbuy",
                        "descr": "Amazon coupon for free",
                        "long_descr": "Shop for virtually anything on Amazon you might want to buy online including books, movies, music and games, digital downloads, electronics, computers, home and garden, toys, apparel and more.",
                        "tips": "Just Go to amazon.com",
                        "nleft": 100,
                        "rating": "Very Good App",
                        "image": "https://icycoupons.com/img/grid/ubergrid2.jpg",
                        "type": [
                            "coupon",
                            "code"
                        ],
                        "nuses": 500,
                        "tag": [
                            "ebay",
                            "code ebay"
                        ],
                        "nrating": 5
                    },
                    {
                        "id": 7,
                        "name": "metto",
                        "descr": "Amazon coupon for free",
                        "long_descr": "Shop for virtually anything on Amazon you might want to buy online including books, movies, music and games, digital downloads, electronics, computers, home and garden, toys, apparel and more.",
                        "tips": "Just Go to amazon.com",
                        "nleft": 100,
                        "rating": "Very Good App",
                        "image": "https://icycoupons.com/img/grid/eldenring-grid.jpg",
                        "type": [
                            "coupon",
                            "code"
                        ],
                        "nuses": 500,
                        "tag": [
                            "ebay",
                            "code ebay"
                        ],
                        "nrating": 5
                    }
                ]
            }),
        )
    }),
    rest.get("http://localhost/coupon/5/deals", (req,res,ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                "data" : [
                    {
                        "id": 5,
                        "name": "100$ Off",
                        "descr": "$100 OFF Your Next Checkout with Amazon",
                        "total_uses": 10000,
                        "today_uses": 100,
                        "code": "Amazo****",
                        "image": "https://icycoupons.com/img/grid/eldenring-grid.jpg",
                        "tag": [
                            "amazon",
                            "code amazon"
                        ]
                      
                    },
                    {
                        "id": 6,
                        "name": "50% Off",
                        "descr": "50% OFF Computers",
                        "total_uses": 500,
                        "today_uses": 200,
                        "code": "Amazo****",
                        "image": "https://icycoupons.com/img/grid/eldenring-grid.jpg",
                        "tag": [
                            "amazon",
                            "code amazon"
                        ]
                      
                    },{
                        "id": 7,
                        "name": "70% OFF",
                        "descr": "70% OFF on Selected Sale Items",
                        "total_uses": 2000,
                        "today_uses": 500,
                        "code": "Amazo****",
                        "image": "https://icycoupons.com/img/grid/eldenring-grid.jpg",
                        "tag": [
                            "amazon",
                            "code amazon"
                        ]
                      
                    },
                ]
            }),
        )
    }),
    rest.get("http://localhost/coupon/5", (req,res,ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                "data" : 
                    {
                        "id": 1,
                        "name": "ebay 3",
                        "descr": "Amazon coupon for free 5",
                        "long_descr" : "Shop for virtually anything on Amazon you might want to buy online including books, movies, music and games, digital downloads, electronics, computers, home and garden, toys, apparel and more",
                        "tips": "Good tips",
                        "nleft": 100,
                        "rating": "good job",
                        "image": "https://i.imgur.com/eW53xyb.png",
                        "type": [
                            "coupon2",
                            "code2"
                        ],
                        "nuses": 700,
                        "tag": [
                            "amazon",
                            "code amazon"
                        ],
                        "nrating": 4.5
                      
                    }
                
            }),
        )
    }),
]

