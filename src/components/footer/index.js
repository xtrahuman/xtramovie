import githubIcon from "../../asset/icons8-github.svg"
import linkedinIcon from "../../asset/icons8-linkedin.svg"
import mediumIcon from "../../asset/icons8-medium.svg"
import twitterIcon from "../../asset/icons8-twitter.svg"

const FooterSection = () => {

    const footerTile = [
        {
            heading: "XtraMovie",
            childs: ['about us', 'my profile', 'contacts'],
            childUrls: ['#aboutus','#myprofile', '#contacts']
        },
        {
            heading: "subscription",
            childs: ['our plans', 'favorites', 'discounts'],
            childUrls: ['#','#', '#']
        },
        {
            heading: "Browse",
            childs: ['tv shows', 'movies', 'collections'],
            childUrls: ['#tvshows','#movies', '#collections']
        },
        {
            heading: "Help",
            childs: ['terms and service', 'supported device', 'accessibility'],
            childUrls: ['#help','#supported', '#accessibility']
        },
    ]

    return (
        <footer className="flex w-full mt-10 mb-6 flex-wrap">
            <ul className="flex flex-wrap bg-yellow gap-y-3 justify-between w-full footer-other">
                {
                    footerTile.map(({heading, childs, childUrls}) =>
                    <li className="flex basis-1/4 flex-col mobile-flex-ft">
                        <h5>{heading}</h5>
                        {childs.map((child,index) => 
                        <a href={childUrls[index]} className="text-[#ffffffb3]">{child}</a>
                        )}
                    </li>
                    )
                }
            </ul>
            <div className="flex flex-col items-center w-full mt-12 mb-5">
                <h5 className="text-lg">XtraMovie</h5>
                <div className="flex gap-x-6 mt-2">
                    <a href="#"><img className="w-7 h-7" src={twitterIcon} alt="twiterlogo" /></a>
                    <a href="#"><img className="w-7 h-7" src={mediumIcon} alt="mediumlogo" /></a>
                    <a href="#"><img className="w-7 h-7" src={githubIcon} alt="githublogo" /></a>
                    <a href="#"><img className="w-7 h-7" src={linkedinIcon} alt="linkedinlogo" /></a>
                </div>
            </div>
        </footer>
    );
  };
  
  export default FooterSection;