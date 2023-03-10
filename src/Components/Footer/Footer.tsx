import "./Footer.css"
export default function Footer() {
    return(
        <div className={"main-footer"}>
            <div>
                <p className={"paragraph"}>© Natalie Soltis Games 2018-2022. All Rights reserved.</p>
            </div>
            <div>
                <p className={"paragraph"}>This website made using React.</p>
                <a className={"hyperlink"} href={"https://github.com/hi-names-nat/porfolio-site"}>Source Code</a>
            </div>
        </div>
    );
}