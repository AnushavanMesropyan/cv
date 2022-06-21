export default function SideBar() {
    return (
        <div id="sidebar-wrapper" className="pt-5  px-3  max-vh-100 scroll_y_auto w-25">
            <div className=" py-4  text-white font-monospace   border_bottom_custom ">
                <h4 className="font-monospace">OBJECTIVE</h4>
                <p className="">
                    Full-stack Web Developer with 4 years of experience.
                    Self-motivated and dedicated developer seeks new opportunities to work
                    in good companies on challenging and interesting projects.
                </p>
            </div>
            <div className=" py-4  text-white font-monospace">
                <h4 className="font-monospace">Website Links</h4>
                <p className="overflow-hidden">
                    <b>Linkedin:</b><br/>
                    <a
                        className="text-decoration-none text-color "
                        href="https://www.linkedin.com/in/anushavan-mesropyan-67266615b/"
                        target="_blank">
                        https://www.linkedin.com/in/anushavan-mesropyan-67266615b/
                    </a>
                </p>
            </div>
        </div>
    )
}