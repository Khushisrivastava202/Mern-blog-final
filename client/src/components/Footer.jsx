import { Link } from 'react-router-dom';
import { Footer ,Button} from 'flowbite-react'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer  container className=" border-t-4 border-t-gradient-purple-blue-teal">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
          <Link to="/">
              <Button outline gradientDuoTone="purpleToBlue" size="xl" className='mb-5'>TechTraverse</Button>
          </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://khushi-portfolio.onrender.com/" target="_blank">Portfolio</Footer.Link>
                <Footer.Link href="/about" target="_blank">Khushi's Blog</Footer.Link>
              </Footer.LinkGroup>
            </div> 
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link 
                href="https://github.com/Khushisrivastava202" target="_blank">Github</Footer.Link>
                <Footer.Link href="https://www.linkedin.com/in/-khushi-srivastava-/" target="_blank">LinkedIn</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="TechTraverse™" year={new Date().getFullYear()} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" target="_blank" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/_khushi_srivastava_/" target="_blank" icon={BsInstagram} />
            <Footer.Icon href="https://twitter.com/Khushi_Sriva" target="_blank" icon={BsTwitter} />
            <Footer.Icon href="https://github.com/Khushisrivastava202" target="_blank" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  )
}
