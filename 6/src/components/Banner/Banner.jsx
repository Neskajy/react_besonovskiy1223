import s from "./Banner.module.scss";
import banner from "../../assets/raster/banner.png";

export default function Banner() {
    return (
        <>
            <section className={s.banner}>
                <div className={s.background}>
                    <img src={banner} alt="" />
                </div>
                <div className={s.container}>
                    <button className={s.about}>
                        О компании <span>АвтоТорг</span>
                    </button>
                </div>
            </section>
        </>
    )
}