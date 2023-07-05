const FooterSection = () => {

    const footerTile = [
        {
            heading: "XtraMovie",
            childs: ['about us', 'my profile', 'contacts'],
            childUrls: ['#aboutus','#myprofile', '#contacts']
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
        <footer className="flex mt-10 mb-6">
            <div className="basis-1/4 bg-red">
                movie brand
            </div>
            <ul className="basis-3/4 flex bg-yellow justify-between">
                {
                    footerTile.map(({heading, childs, childUrls}) =>
                    <li className="flex flex-col">
                        <h5>{heading}</h5>
                        {childs.map((child,index) => 
                        <a href={childUrls[index]} className="text-[#ffffffb3]">{child}</a>
                        )}
                    </li>
                    )
                }
            </ul>
        </footer>
    );
  };
  
  export default FooterSection;