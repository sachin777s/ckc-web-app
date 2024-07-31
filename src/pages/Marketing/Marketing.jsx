import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"
import TransButton from "../../components/asssets/TransButton"
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io"

export default function Marketing() {

  return (
    <>
      <section style={{ backgroundImage: 'url(/image/bulding.jpg)', backgroundSize: 'cover', paddingTop: '100px', paddingBottom: "100px", position: "relative" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <h1 className='fs-1 fw-bold mt-5'>Professional Marketing <br />Services.</h1>
              <p className='fs-4 mt-4'>Londontra Marketing Company strategically crafts bespoke and integrated marketing strategies for businesses operating in all industries or circumstances.</p>
              <ColorButton className="fs-4 mt-5 mb-5 rounded-pill ">Explore our team</ColorButton>
              <TransButton className="fs-4 mt-5 ms-5 rounded-pill">Get in touch</TransButton>
            </div>
            <div className="col-md-6">
            </div>
          </div>
        </div>

        <div onClick={() => window.scrollBy(0, 600)}
          className='absolute bottom-20 left-1/2 text-center flex flex-col'>
          <span className='text-danger'>Scroll Down</span>
          <span className='mt-4 self-center text-danger fs-3'><IoIosArrowDown /></span>
        </div>

      </section>

      <section style={{ backgroundColor: "#f1f1f1"}}>
        <div className="container">
          <h1 className='fs-1 fw-bold ms-5 mt-5 mb-5'>Business &  marketing practices we specialise in.</h1>
          <div className="row">
            <div className="col-md-4">
              <img style={{ height: '250px', marginLeft: "50px" }} src="/image/bussines-image.png" alt="" />
              <h1 className='fs-3 ms-5 fw-bold'>Business Development</h1>
              <div className="ms-5 mt-3">
                <p className='fs-4'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Business Coaching</p>
                <p className='fs-4'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Business Expansion</p>
                <p className='fs-4'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Business Planning</p>
                <p className='fs-4'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Business Start-Up & Scale</p>
                <p className='fs-4'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Cash Flow Forecasting & <span className='ms-5'>Budget</span></p>
                <p className='fs-4'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Investment Assistance & <span className='ms-5'>Pitch Decks</span></p>
                <p className='fs-4'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Outdoor Marketing</p>
                <p className='fs-4'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Profit Maximisation Strategies</p>
                <p className='fs-4'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Survival Strategies</p>
              </div>
            </div>
            <div className="col-md-4">
              <img style={{ height: '250px', marginLeft: "50px" }} src="/image/markating.png" alt="" />
              <h1 className='fs-3 ms-5 fw-bold'>Marketing Enhancement</h1>
              <p className='fs-4 ms-5 mt-3'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Branding & Positioning</p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Customer Retention & <span className='ms-5'>Loyalty</span> </p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Experiential Marketing</p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Marketing Audits</p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Market Segmentation</p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Professional Marketing Plans</p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Relationship Marketing</p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Targetting</p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Theoretical Marketing</p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Visual Merchandising For <span className='ms-5'>Retail</span></p>
            </div>
            <div className="col-md-4">
              <img style={{ height: '250px', marginLeft: "50px" }} src="/image/digital-markating.png" alt="" />
              <h1 className='fs-3 ms-5 fw-bold'>Digital Marketing</h1>
              <p className='fs-4 ms-5 mt-3'> <i class="bi bi-check-square-fill me-2 text-danger"></i> 3D Modelling & Rendering</p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Google Ads & P.P.C</p>
              <p className='fs-4 ms-5'><i class="bi bi-check-square-fill me-2 text-danger"></i> Netnography</p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Professional Photography</p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Search Engine Optimisation</p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Social Media Marketing</p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Website Design & <span className='ms-5'>Development</span></p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Video Marketing</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <div className='w-full overflow-hidden mt-5'>
                <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/new-york-city.jpg" alt=".." />
              </div>
            </div>
            <div className="col-md-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="73" height="64" viewBox="0 0 73 64" fill="none" className='mt-5 ms-5'><path d="M32.3046 64V31.3766H18.4598C19.2988 19.7403 23.9138 16.2078 31.4655 12.8831L29.9971 0C12.1667 3.11688 0 14.5455 0 39.2727V64H32.3046ZM73 64V31.3766H59.3649C59.9942 19.7403 64.6092 16.2078 72.1609 12.8831L70.6925 0C52.8621 3.11688 40.6954 14.5455 40.6954 39.2727V64H73Z" fill="#3D89CA"></path></svg>
              <p className='mt-4 fs-4 mx-5'>Defining a unique brand identity is imperative for long-term survival for any business, at any level, in the hyper-competitive globalised marketplace in which we all, by default, compete within today. As David Ogilvy iconically stated, "There isn't any significant difference between the various brands of whiskey, or cigarettes or beer. They are all about the same... the manufacturer who dedicates his advertising to building the most sharply defined personality for his brand will get the largest share of the market at the highest profit.".</p>
              <h1 className='fs-2 ms-5 mt-4 fw-bold'>Tristan James Newman</h1>
              <p className='fs-4 ms-5'>Founder & Managing Director</p>
              <ColorButton className="fs-4 mt-4 mb-5 ms-5 rounded-pill ">Discover the London Marketing Company team</ColorButton>
            </div>
          </div>
        </div>

        <div className="container">
          <h1 className='fs-1 fw-bold ms-5 mt-5 mb-5'>Highly trained marketing specialists.</h1>
          <div className="row">
            <div className="col-md-4">
              <h1 className='fs-3 ms-5 fw-bold'>Who is London Marketing Company?</h1>
              <div className="ms-5 mt-3">
                <p className='fs-5'>London Marketing Company is the leading marketing company in London and has offices also in Bristol, Manchester, Cardiff and Reading. London Marketing Company is a professional, chartered organization that specialises in tailored solutions for the bespoke needs of our clients—from small indies to larger national corporations.</p>
                <p className='fs-5 mt-4'>We know that all marketing is an investment in growing your business and its profitability. We offer packages for non-obligatory consultations with our team of experts, ranging from SEO specialists to web developers; graphic designers such as a copywriter or social media managers who can help you craft the best possible message tailored specifically towards what interests potential customers most about YOUR product/service offerings!</p>
              </div>
            </div>
            <div className="col-md-4">
              <h1 className='fs-3 ms-5 fw-bold'>How we can help you improve your marketing with immediate effect?</h1>
              <p className='fs-5 ms-5 mt-3'>One of the most competitive aspects of London Marketing Company is we offer a full range of marketing packages, from managed one-off services to monthly fixed retainers. This allows for tailored solutions depending on what your needs are and how much time is required on a monthly basis! Our team provides many different types of service options which can meet any specific requirements, whether web design, branding, search engine optimisation or visual merchandising.</p>
            </div>
            <div className="col-md-4">
              <h1 className='fs-3 ms-5 fw-bold'>How does London Marketing Company improve my business' competitiveness and profitability?</h1>
              <p className='fs-5 ms-5 mt-3'>London Marketing Company is a premier agency that develops and manages active marketing programs for its clients. The team consists of highly skilled marketing, web, design and media professionals who work with you to create an individualized plan tailored specifically towards your business needs and targets, which can either complement or revolutionise existing strategies in order to attract more customers through creative campaigns designed especially for each client’s unique products/services offerings.</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="73" height="64" viewBox="0 0 73 64" fill="none" className='mt-5 ms-5'><path d="M32.3046 64V31.3766H18.4598C19.2988 19.7403 23.9138 16.2078 31.4655 12.8831L29.9971 0C12.1667 3.11688 0 14.5455 0 39.2727V64H32.3046ZM73 64V31.3766H59.3649C59.9942 19.7403 64.6092 16.2078 72.1609 12.8831L70.6925 0C52.8621 3.11688 40.6954 14.5455 40.6954 39.2727V64H73Z" fill="#3D89CA"></path></svg>
              <h1 className='fs-1 ms-5 mt-3 mx-5'>Investment, venture capital & pitch decks.</h1>
              <p className='mt-4 fs-4 mx-5'>You may have a great product and profitable business, but you may need investors with the cash to take it one step further. We have a team of experts who will work with you to find the right investors so your business can reach new levels. We will enhance brand perception by polishing brand assets and creating investor pitch decks highlighting market research, potential investments in the relevant industry and investor-friendly strategies like scaling efforts.</p>
              <ColorButton className="fs-4 mt-4 mb-5 ms-5 rounded-pill ">Get in touch</ColorButton>
              <div>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className='w-full overflow-hidden mt-5'>
                <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/beautiful.jpg" alt=".." />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h1 className='fs-1 fw-bold ms-5'>Start-up & scale business acceleration.</h1>
          <p className='fs-3 mx-5 mt-3 mb-5'>We can help your business reach its full potential by assisting you with every step of your business journey. Whether you need help launching or you want to turn thousands into millions, we have the tools and knowledge to help you hit your targets.</p>
          <div className="row">
            <div className="col-md-4">
              <h1 className='fs-3 ms-5 fw-bold'>What can we do to help you digitally?</h1>
              <div className="ms-5 mt-3">
                <p className='fs-4'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Website design</p>
                <p className='fs-4'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Corporate & Business Photography</p>
                <p className='fs-4'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Videography & Drone Footage</p>
                <p className='fs-4'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Content Writing</p>
                <p className='fs-4'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Create your Social Media Profiles</p>
                <p className='fs-4'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Planning and Integrating S.E.O Tactics</p>
              </div>
            </div>
            <div className="col-md-4">
              <h1 className='fs-3 ms-5 fw-bold'>What can we do to help you physically?</h1>
              <p className='fs-4 ms-5 mt-3'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Visual Merchandising</p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Shop/Premises Physical Branding</p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Outdoor Marketing</p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Media & Public Relations</p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Investment Sourcing</p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Professional Networking</p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Routing The Consumer Decision <span className='ms-5'>Making Process</span></p>
            </div>
            <div className="col-md-4">
              <h1 className='fs-3 ms-5 fw-bold'>What can we do to help you strategically?</h1>
              <p className='fs-4 ms-5 mt-3'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Assessing your <span className='ms-4'>Business/Product/Service</span></p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Market Analysis</p>
              <p className='fs-4 ms-5'><i class="bi bi-check-square-fill me-2 text-danger"></i> Discussing your Goals</p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Planning your Launch</p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Planning your Marketing Campaign <span className='ms-5'>(including Email Marketing)</span></p>
              <p className='fs-4 ms-5'> <i class="bi bi-check-square-fill me-2 text-danger"></i> Launch, Plan, Review, React</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <div className='w-full overflow-hidden mt-5'>
                <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/fresh-orange.jpg" alt=".." />
              </div>
            </div>
            <div className="col-md-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="73" height="64" viewBox="0 0 73 64" fill="none" className='mt-5 ms-5'><path d="M32.3046 64V31.3766H18.4598C19.2988 19.7403 23.9138 16.2078 31.4655 12.8831L29.9971 0C12.1667 3.11688 0 14.5455 0 39.2727V64H32.3046ZM73 64V31.3766H59.3649C59.9942 19.7403 64.6092 16.2078 72.1609 12.8831L70.6925 0C52.8621 3.11688 40.6954 14.5455 40.6954 39.2727V64H73Z" fill="#3D89CA"></path></svg>
              <h1 className='fs-1 ms-5 mt-3'>Targeted social media promotions.</h1>
              <p className='mt-4 fs-4 mx-5'>The London Marketing Company is here to help you establish your online presence with a social media profile that will enlighten and engage. Our marketing experts have helped companies across the board from all industries generate leads through our effective branding-recognition strategies! The London Marketing Company is here to help you establish your online presence with a social media profile that will resonate across all channels.</p>
              <ColorButton className="fs-4 mt-5 mb-5 ms-5 rounded-pill ">See our social media promotions</ColorButton>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="73" height="64" viewBox="0 0 73 64" fill="none" className='mt-5 ms-5'><path d="M32.3046 64V31.3766H18.4598C19.2988 19.7403 23.9138 16.2078 31.4655 12.8831L29.9971 0C12.1667 3.11688 0 14.5455 0 39.2727V64H32.3046ZM73 64V31.3766H59.3649C59.9942 19.7403 64.6092 16.2078 72.1609 12.8831L70.6925 0C52.8621 3.11688 40.6954 14.5455 40.6954 39.2727V64H73Z" fill="#3D89CA"></path></svg>
              <h1 className='fs-1 ms-5 mt-3'>Entice customers and clients with targeted email campaigns.</h1>
              <p className='mt-4 fs-4 mx-5'>We are experts at crafting captivating emails that will make your inboxes overflow with action. Our research skills and creative talent generate real results for our clients. We use strategic methods to create an R.O.I and decipher data so you can confidently grow your business!</p>
              <ColorButton className="fs-4 mt-5 mb-5 ms-5 rounded-pill ">Contact us today</ColorButton>
              <div>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className='w-full overflow-hidden mt-5'>
                <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/view-contemporary.jpg" alt=".." />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <div className='w-full overflow-hidden mt-5'>
                <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/black-white.jpg" alt=".." />
              </div>
              <div>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="73" height="64" viewBox="0 0 73 64" fill="none" className='mt-5 ms-5'><path d="M32.3046 64V31.3766H18.4598C19.2988 19.7403 23.9138 16.2078 31.4655 12.8831L29.9971 0C12.1667 3.11688 0 14.5455 0 39.2727V64H32.3046ZM73 64V31.3766H59.3649C59.9942 19.7403 64.6092 16.2078 72.1609 12.8831L70.6925 0C52.8621 3.11688 40.6954 14.5455 40.6954 39.2727V64H73Z" fill="#3D89CA"></path></svg>
              <h1 className='fs-1 ms-5 mt-3'>Professional grade-A content writing.</h1>
              <p className='mt-4 fs-4 mx-5'>Good quality content writing is a fundamental way of communicating the values, services and brand identity. It’s an excellent way for customers to form their first impression about what you have, from how they interact on site all while enjoying great content!</p>
              <ColorButton className="fs-4 mt-5 mb-5 ms-5 rounded-pill ">Get in touch to see how we can help</ColorButton>
            </div>
          </div>
        </div>

        <div className="container">
          <h1 className='fs-1 fw-bold ms-5 mt-5 '>How your content can work for you.</h1>
          <p className='fs-4 ms-5 mt-4 mb-5'>The London Marketing Company’s content writing experts can produce professional-grade copy that captures and articulates what your company stands for. Get in touch with us today to see how we can help you.</p>
          <div className="row">
            <div className="col-md-4">
              <h1 className='fs-3 ms-5 fw-bold'>Strategic content campaigns</h1>
              <div className="ms-5 mt-3">
                <p className='fs-5'>
                  Sharp, smart, and to-the-point content writing is key to effectively communicating your brand and its values. Content writing ranges from everything to the architecture of a website (such as the copy you’re reading now) to writing that outlines services, values, areas of note, and thought leadership.</p>
                <p className='fs-5 mt-4'>Whether you need a series of blogs on your website or a full-scale overhaul of written materials and structures, the marketing experts here at the London Marketing Company are able to build a strategic content campaign tailored specifically to the objectives that you’re looking to achieve.</p>
                <p className='fs-5 mt-4'>Good content writing isn’t just a luxury, it’s an essential part of establishing a coherent and distinctive brand image.</p>
                <p className='fs-5 mt-4'>We’ll work with your business to construct a bespoke content campaign for your business, that incorporates your brand language, key selling points and other content elements that you wish to include. Get in touch to find out more about how we can help to maximise your reach and vision.</p>
              </div>
            </div>
            <div className="col-md-4">
              <h1 className='fs-3 ms-5 fw-bold'>SEO & SEM: supercharging your online presence</h1>
              <p className='fs-5 ms-5 mt-3'>Search engine optimisation (SEO) and search engine marketing (SEM) are ubiquitous terms in content marketing that you might have heard of. But what do they actually mean?</p>
              <p className='fs-5 ms-5 mt-3'>SEO means tailoring web content and web pages to appear higher in search rankings, and SEM means using paid strategies to increase visibility on these search engines. Both are essential tools in the arsenal of any content marketing strategy.</p>
              <p className='fs-5 ms-5 mt-3'>The marketing experts at London Marketing Company will help to supercharge your businesses’ selling points. We’ll help your business to target precise, fixed keywords that enable your website to stand out from competitors when on search engines.</p>
              <p className='fs-5 ms-5 mt-3'>This will allow you to address your existing audience and while targeting potential leads using cutting-edge search engine tools and expertise. It’s a fundamental part of solid business development and growing your reach online. Get in touch to see how we might be able to help boost your search engine standing.</p>
            </div>
            <div className="col-md-4">
              <h1 className='fs-3 ms-5 fw-bold'>Delivering value beyond search ranking</h1>
              <p className='fs-5 ms-5 mt-3'>Our SEO and SEM expertise will optimise the positioning of your company’s ranking and standing on search engine platforms. But this is only half the story of a successful online brand proposition: the difference between good and bad writing is easy to see but difficult to master.</p>
              <p className='fs-5 ms-5 mt-3'>The content experts at the London Marketing Company have worked with a wide range of companies across a variety of industries. We’ll leverage this experience and expertise across all aspects of your online business proposition, crafting copy that articulates your vision in asuccinct, lively, and sharp way.</p>
              <p className='fs-5 ms-5 mt-3'>Our writers have worked for some of the UK’s leading titles and will bring a combination of rigour and quality, honed by content writing at the very highest levels. Get in touch to see how we can bring your brand to life.</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <div className='w-full overflow-hidden mt-5'>
                <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/hacker.jpg" alt=".." />
              </div>
              <div>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="73" height="64" viewBox="0 0 73 64" fill="none" className='mt-5 ms-5'><path d="M32.3046 64V31.3766H18.4598C19.2988 19.7403 23.9138 16.2078 31.4655 12.8831L29.9971 0C12.1667 3.11688 0 14.5455 0 39.2727V64H32.3046ZM73 64V31.3766H59.3649C59.9942 19.7403 64.6092 16.2078 72.1609 12.8831L70.6925 0C52.8621 3.11688 40.6954 14.5455 40.6954 39.2727V64H73Z" fill="#3D89CA"></path></svg>
              <h1 className='fs-1 ms-5 mt-3'>Television and radio broadcast PR.</h1>
              <p className='mt-4 fs-4 mx-5'>We partner with multidisciplinary creative multimedia broadcast PR specialists to construct integrated TV and radio marketing broadcast campaigns, on local, regional and national levels.</p>
              <ColorButton className="fs-4 mt-5 mb-5 ms-5 rounded-pill ">Get help with Broadcast PR today</ColorButton>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="73" height="64" viewBox="0 0 73 64" fill="none" className='mt-5 ms-5'><path d="M32.3046 64V31.3766H18.4598C19.2988 19.7403 23.9138 16.2078 31.4655 12.8831L29.9971 0C12.1667 3.11688 0 14.5455 0 39.2727V64H32.3046ZM73 64V31.3766H59.3649C59.9942 19.7403 64.6092 16.2078 72.1609 12.8831L70.6925 0C52.8621 3.11688 40.6954 14.5455 40.6954 39.2727V64H73Z" fill="#3D89CA"></path></svg>
              <h1 className='fs-1 ms-5 mt-3'>Share your story with the world. But where should you begin with Public Relations?</h1>
              <p className='mt-4 fs-4 mx-5'>We optimise public relations strategies with our holistic approach to marketing & PR, generating real leads via media coverage and social networks, facilitating enterprises to reach new target audiences.</p>
              <ColorButton className="fs-4 mt-5 mb-5 ms-5 rounded-pill ">Let us help you today</ColorButton>
              <div>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className='w-full overflow-hidden mt-5'>
                <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/two-smal.jpg" alt=".." />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <h1 className='fs-1 text-center mt-5 fw-bold'>What is Search Engine <br /> Optimisation?</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card mt-5 rounded-0 border-0" style={{ backgroundColor: '#f0f0f0' }}>
              <div style={{ margin: '0 auto' }}>
                <img className='mt-5' src="/image/text.png" alt="text-image " />
              </div>
              <h1 className='fs-2 mt-3 mb-5 fw-bold text-center'>The <br /> Language</h1>
              <Link to={'/'}><p className='text-center fs-4 mt-5 mb-5'>Learn more <i class="bi bi-arrow-right text-primary"></i></p></Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-5 rounded-0 border-0" style={{ backgroundColor: '#f0f0f0' }}>
              <div style={{ margin: '0 auto' }}>
                <img className='mt-5' src="/image/mail.png" alt="text-image" />
              </div>
              <h1 className='fs-2 mt-3 mb-5 fw-bold text-center'>Call-To- <br />Actions</h1>
              <Link to={'/'}><p className='text-center fs-4 mt-5 mb-5'>Learn more <i class="bi bi-arrow-right text-primary"></i></p></Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-5 rounded-0 border-0" style={{ backgroundColor: '#f0f0f0' }}>
              <div style={{ margin: '0 auto' }}>
                <img className='mt-5' src="/image/operational-system.png" alt="text-image" />
              </div>
              <h1 className='fs-2 mt-3 mb-5 fw-bold text-center'>Business <br /> Offering</h1>
              <Link to={'/'}><p className='text-center fs-4 mt-5 mb-5'>Learn more <i class="bi bi-arrow-right text-primary"></i></p></Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="card mt-5 rounded-0 border-0" style={{ backgroundColor: '#f0f0f0' }}>
              <div style={{ margin: '0 auto' }}>
                <img className='mt-5' src="/image/notebook.png" alt="text-image" />
              </div>
              <h1 className='fs-2 mt-3 mb-5 fw-bold text-center'>The <br /> Process</h1>
              <Link to={'/'}><p className='text-center fs-4 mt-5 mb-5'>Learn more <i class="bi bi-arrow-right text-primary"></i></p></Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mt-5 rounded-0 border-0" style={{ backgroundColor: '#f0f0f0' }}>
              <div style={{ margin: '0 auto' }}>
                <img className='mt-5' src="/image/adware.png" alt="text-image " />
              </div>
              <h1 className='fs-2 mt-3 mb-5 fw-bold text-center'>On-Page <br /> Content</h1>
              <Link to={'/'}><p className='text-center fs-4 mt-5 mb-5'>Learn more <i class="bi bi-arrow-right text-primary"></i></p></Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-5 rounded-0 border-0" style={{ backgroundColor: '#f0f0f0' }}>
              <div style={{ margin: '0 auto' }}>
                <img className='mt-5' src="/image/media.png" alt="text-image " />
              </div>
              <h1 className='fs-2 mt-3 mb-5 fw-bold text-center'>Website <br /> Speed</h1>
              <Link to={'/'}><p className='text-center fs-4 mt-5 mb-5'>Learn more <i class="bi bi-arrow-right text-primary"></i></p></Link>
            </div>
          </div>
        </div>
      </div>

      <div class="rainbow-callto-action-area rainbow-section-gap mt-5">
        <div class="wrapper">
          <div class="rainbow-callto-action clltoaction-style-default bg-image bg-image2 bg_image_fixed" data-black-overlay="7" style={{ backgroundImage: 'url(/image/new-york-city.jpg)' }}>
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="inner">
                    <div class="content text-center">
                      <h2 class="title sal-animate fs-1 fw-bold mt-5" data-sal="slide-up" data-sal-duration="400" data-sal-delay="200">London loves our... </h2>
                      <h6 class="subtitle sal-animate  bg-color-blackest radius mt--26 mt-5 fs-2 mb-5" data-sal="slide-up" data-sal-duration="400" data-sal-delay="300">Web Developement</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="section-title text-center sal-animate" data-sal="slide-up" data-sal-duration="700" data-sal-delay="100">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get in Touch form */}
      {/****** THIS SECTION IN TAILWIND CSS ******/}
      <section>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex items-center justify-center">
            <div className="lg:w-3/5 md:w-2/5 md:pr-16 lg:pr-0 pr-0">
              <img style={{ height: '400px', margin: '0 auto' }} src="/image/form-man-05.png" alt="form image" />
              <h1 className="title-font text-6xl font-medium text-gray-900 mx-5">
                To start growing your business today, contact us
              </h1>
              <p className="leading-relaxed mt-4 fs-3 mx-5">
                Let's get to know each other and talk about how we can help you.
              </p>
            </div>

            <div className="md:w-3/5">
              <form
                action=""
                className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-[var(--main-color)] focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative mb-4">
                  <label htmlFor="company" className="leading-7 text-sm text-gray-600">
                    Company
                  </label>
                  <input
                    type="company"
                    name="company"
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative mb-4">
                  <label htmlFor="talephone" className="leading-7 text-sm text-gray-600">
                    Talephone
                  </label>
                  <input
                    type="talephone"
                    name="talephone"
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative mb-4">
                  <label htmlFor="talephone" className="leading-7 text-sm text-gray-600">
                    What's your budget?
                  </label>
                  <select
                    type="talephone"
                    name="talephone"
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-[10px] px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option>Marketing</option>
                    <option>Website</option>
                    <option>Branding</option>
                    <option>Media</option>
                    <option>Multiple Services</option>
                  </select>
                </div>

                <div className="relative mb-4">
                  <label htmlFor="talephone" className="leading-7 text-sm text-gray-600">
                    What's your email regarding?
                  </label>
                  <select
                    type="talephone"
                    name="talephone"
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-[10px] px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option>£0 - £1k</option>
                    <option>£1 - £5</option>
                    <option>£5 - £10</option>
                    <option>£10 - £25</option>
                    <option>£25 - £100</option>
                    <option>£100+</option>
                  </select>
                </div>

                <div className="relative mb-4 col-span-2">
                  <label htmlFor="talephone" className="leading-7 text-sm text-gray-600">
                    Message
                  </label> <br />
                  <textarea
                    name="message"
                    id="message"
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-[var(--main-color)] text-base outline-none text-gray-700 py-[10px] px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </form>
            </div>
          </div>
        </section>

      </section>
    </>
  )
}

