//** libraries */
import Link from "next/link";

//** data */
import { companyData } from "@/app/static/json";

//** components */
import { Hashtag } from "@/app/components";

function Product1(
    {
        classScroll,
        blueprintsProd1,
        detailsProduct1,
        ids
    }: {
        classScroll: {
            h2: string,
            h4: string
        },
        blueprintsProd1: ({
            id: string;
            name: string;
            href: string;
        } | {
            id: string;
            name: string[];
            href: string[];
        })[],
        detailsProduct1: {
            uditch_1: {
                size: string;
                thickness: string;
                details: string;
                unit: string;
            };
            uditch_2: {
                size: string;
                thickness: string;
                details: string;
                unit: string;
            };
        }[],
        ids: {
            id: string;
            name: string;
        }[]
    }) {
    return (
        <div className="mt-8 space-y-8">
            {/* Section 1 */}
            <section id={ids[0].id} className={`section ${classScroll.h2}`}>
                <h2 className="text-2xl font-bold sm:text-3xl text-start text-primary">
                    <Hashtag name={ids[0].name} href={`#${ids[0].id}`} />
                </h2>
                <p className="text-gray-500 text-start">
                    รางระบายน้ำคอนกรีตสำเร็จรูปพร้อมฝาปิด
                    แข็งแรง ใช้เวลาติดตั้งน้อย
                    รักษาความสะอาดง่าย ต่อเป็นเนื้อเดียวกัน มีแบบฝาปิด ทั้งคอนกรีตหรือฝาตะแกรงเหล็ก
                </p>
            </section>

            {/* Images */}
            <div className="grid grid-cols-6 grid-rows-2 gap-1 lg:gap-3 h-[150px] md:h-[250px] lg:h-[350px] mt-4">
                <div className="col-span-4 col-start-1 overflow-hidden rounded-md">
                    <img className="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                        src="/images/products_service/1/5.jpg" alt="banner5" />
                </div>
                <div className="col-span-2 col-end-7 overflow-hidden rounded-md">
                    <img className="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                        src="/images/products_service/1/3.jpg" alt="banner3" />
                </div>

                <div className="col-span-3 col-start-1 overflow-hidden rounded-md">
                    <img className="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                        src="/images/products_service/1/6.jpg" alt="banner6" />
                </div>
                <div className="col-span-1 col-start-4 overflow-hidden rounded-md">
                    <img className="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                        src="/images/products_service/1/4.jpg" alt="banner4" />
                </div>
                <div className="col-span-2 col-end-7 overflow-hidden rounded-md">
                    <img className="object-cover w-full h-full transition-transform duration-500 ease-in-out rounded-md hover:scale-105"
                        src="/images/products_service/1/7.jpg" alt="banner7" />
                </div>
            </div>

            {/* Section 2 */}
            <section id={ids[1].id} className={`section ${classScroll.h4}`}>
                <h4 className="mt-4 text-lg font-semibold leading-6 sm:text-xl text-start text-secondary">
                    <Hashtag name={ids[1].name}
                        href={`#${ids[1].id}`} />
                </h4>
                <div className="mt-4">
                    <ul className="space-y-3">
                        {blueprintsProd1.map((blueprint, index) => (
                            <li key={index} className="flex text-gray-500 w-fit h-fit leading-6">
                                {typeof (blueprint.name) == 'object' || typeof (blueprint.href) == 'object' ? (
                                    <div className="w-fit">
                                        <Link href={blueprint.href[0]} target="_blank" className="hover:text-primary w-fit">
                                            {blueprint.name[0]}
                                        </Link>
                                        &nbsp;|&nbsp;
                                        <Link href={blueprint.href[1]} target="_blank" className="hover:text-primary w-fit">
                                            {blueprint.name[1]}
                                        </Link>
                                    </div>
                                ) : (
                                    <Link href={blueprint.href} target="_blank" className="hover:text-primary w-fit">
                                        {blueprint.name}
                                    </Link>
                                )}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-2 h-2 min-w-2 min-h-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </li>
                        ))}
                    </ul>
                </div >
            </section >

            {/* Section 3 */}
            <section id={ids[2].id} className={`section ${classScroll.h4}`}>
                <h4 className="mt-4 text-lg font-semibold leading-6 sm:text-xl text-start text-secondary">
                    <Hashtag name={ids[2].name}
                        href={`#${ids[2].id}`} />
                </h4>
                <div className="mt-2 overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className="text-sm">
                                <th></th>
                                <th>ขนาด <strong className="text-gray-600">รางน้ำคอนกรีต</strong></th>
                                <th>ขนาด <strong className="text-gray-600">ฝารางน้ำคอนกรีต</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            {detailsProduct1.map((item, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex space-x-2">
                                            <div className="flex space-x-2 text-nowrap">
                                                {item.uditch_1.size != '-' ? (
                                                    <div>
                                                        {item.uditch_1.size} {item.uditch_1.unit}.
                                                    </div>
                                                ) : (
                                                    <div>{item.uditch_1.size}</div>
                                                )}
                                            </div>
                                            {item.uditch_1.thickness && (
                                                <>
                                                    <div className="text-gray-200">|</div>
                                                    <div className="text-nowrap">
                                                        หนา
                                                        {item.uditch_1.thickness} {item.uditch_1.unit}.
                                                    </div>
                                                </>
                                            )}
                                            {item.uditch_1.details && (
                                                <>
                                                    <div className="text-gray-200">|</div>
                                                    <div className=" text-nowrap">{item.uditch_1.details}</div>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex space-x-2">
                                            <div className="flex space-x-2 text-nowrap">
                                                {item.uditch_2.size != '-' ? (
                                                    <div>
                                                        {item.uditch_2.size} {item.uditch_2.unit}.
                                                    </div>
                                                ) : (
                                                    <div >{item.uditch_2.size}</div>
                                                )}
                                            </div>
                                            {item.uditch_2.thickness && (
                                                <>
                                                    <div className="text-gray-200">|</div>
                                                    <div className=" text-nowrap">
                                                        หนา {item.uditch_2.thickness} {item.uditch_1.unit}.
                                                    </div>
                                                </>
                                            )}
                                            {item.uditch_2.details && (
                                                <>
                                                    <div className="text-gray-200">|</div>
                                                    <div className=" text-nowrap">
                                                        {item.uditch_2.details}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div >
    );
}

export default Product1;