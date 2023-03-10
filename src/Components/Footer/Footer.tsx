import "./Footer.css"
export default function Footer() {
    return(
        <div className={"main-footer"}>
             <p className={"footer-text"}>© Natalie Soltis Games 2018-2022. All Rights reserved.</p>
            <div>
                <p className={"footer-text"}>This website made using React. <line/>
                    <a className={"footer-link"} href={"https://github.com/hi-names-nat/porfolio-site"}>Source Code</a>
                </p>
            </div>
        </div>
    );
}