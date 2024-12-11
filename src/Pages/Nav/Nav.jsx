
import { Avatar, Dropdown, Navbar } from "flowbite-react";

const Nav = () => {
    return (
        <Navbar fluid rounded className="border-b-2">
            <Navbar.Brand href="/">
                {/* <img src="./../../images/logo.png" className="mr-3 h-6 sm:h-9" alt="" /> */}
                <div className="flex flex-col justify-center items-center border bg-cyan-100 p-2 rounded-lg">
                    <p className=" self-center text-2xl font-semibold text-orange-500">Japanese-Vocab</p>
                    <small className="-mt-1 uppercase text-blue-500 font-semibold">Easy learnng</small>
                </div>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Sujonifty</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Booking</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="/" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="/service">Services</Navbar.Link>
                <Navbar.Link href="/event">Events</Navbar.Link>
                <Navbar.Link href="/about">About</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Nav;