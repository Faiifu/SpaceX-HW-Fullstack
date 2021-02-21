import React from 'react';

function Footer(){
    return(
        <>
          <footer className="section-3">
            <div className="w-full h-3/4">
              <div className="flex flex-row justify-center">
                <a target="_blank" href="https://www.flickr.com/photos/spacex/"><img src={'/flickr.png'}  className="w-5 pt-5 mx-5"></img></a>
                <a target="_blank" href="https://twitter.com/SpaceX"><img src={'/twitter.png'}  className="w-5 pt-5 mx-5"></img></a>
                <a target="_blank" href="https://www.instagram.com/spacex/"><img src={'/instagram.png'}  className="w-5 pt-5 mx-5"></img></a>
                <a target="_blank" href="https://www.spacex.com/"><img src={'/website.png'}  className="w-5 pt-5 mx-5"></img></a>
              </div>
                <h1 className="text-base tect-center flex justify-center mt-4 mb-4">Space Exploration Technologies Corp. is an American aerospace manufacturer and<br></br>
                space transportation services company headquartered in Hawthorne, California.</h1>
            </div>
          </footer>
        </>
    )

}

export default Footer;