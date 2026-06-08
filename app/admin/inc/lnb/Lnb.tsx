import Link from 'next/link';
import React from 'react';

const lnbs = [
    {
        id: "menu_0",
        oneDepth: "회원관리",
        href: "/admin/members"
    },
    {
        id: "menu_1",
        oneDepth: "일반기부금",
        href: ""
    },
    {
        id: "menu_2",
        oneDepth: "사업별기부금",
        twoDepths: [
            {
                id: "menu_2_depth_0",
                twoDepth: "사업1",
                href: "/admin/business_donation/menu_2_depth_0"
            },
            {
                id: "menu_2_depth_1",
                twoDepth: "사업2",
                href: "/admin/business_donation/menu_2_depth_0"
            },
        ],
    }
];

const Lnb = () => {
    return (
        <div id='lnb'>
            <ul className='lnb__list'>
                {
                    lnbs.map((lnb) => {
                        return (
                            <li key={lnb.id}>
                                <Link href={lnb.href ? lnb.href : "#self"}>
                                    {lnb.oneDepth}
                                </Link>
                                {
                                    lnb.twoDepths && 
                                    (
                                        <ul>
                                            {
                                                lnb.twoDepths?.map((depth) => {
                                                    return (
                                                        <li key={depth.id}>
                                                            <Link href={depth.href}>{depth.twoDepth}</Link>
                                                        </li>
                                                    )
                                                })     
                                            }
                                            <li>
                                                <button>사업 추가</button>
                                            </li>
                                        </ul>
                                    )
                                }
                            </li>
                        )
                    })
                }
            </ul> {/* .lnb__list : end */}
        </div>
    );
};

export default Lnb;