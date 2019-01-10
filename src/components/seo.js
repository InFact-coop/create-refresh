import React from "react"
import Helmet from "react-helmet"

function SEO({ lang, title, image }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title="EU Compliant meme generator"
      meta={[
        { name: "title", content: "EU Compliant meme generator" },
        {
          name: "description",
          content: "Make sure your memes survive Article 13!",
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "fb:app_id",
          content: "1627837104015374",
        },
        {
          property: "og:description",
          content: "Make sure your memes survive Article 13!",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:creator",
          content: "create-refresh",
        },
        { name: "twitter:title", content: "EU Compliant Meme Generator" },
        {
          name: "twitter:description",
          content: "Make sure your memes survive Article 13!",
        },
        {
          name: "twitter:image",
          content: image === null ? "https://i.imgflip.com/2ilji1.jpg" : image,
        },
        {
          property: "og:image",
          content: image === null ? "https://i.imgflip.com/2ilji1.jpg" : image,
        },
        {
          property: "og:image:secure_url",
          content: image === null ? "https://i.imgflip.com/2ilji1.jpg" : image,
        },
        {
          property: "og:url",
          content: "https://eu-compliant-meme-generator.netlify.com/",
        },
        {
          property: "og:image:height",
          content: "630",
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:locale",
          content: "en",
        },
        { name: "robots", content: "index" },
      ]}
    >
      <script>{`
            <script>window.twttr = (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0],
                t = window.twttr || {};
              if (d.getElementById(id)) return t;
              js = d.createElement(s);
              js.id = id;
              js.src = "https://platform.twitter.com/widgets.js";
              fjs.parentNode.insertBefore(js, fjs);
            
              t._e = [];
              t.ready = function(f) {
                t._e.push(f);
              };
            
              return t;
            }(document, "script", "twitter-wjs"));</script>
            
            `}</script>
      <script>
        {`
        window.fbAsyncInit = function() {
          FB.init({
            appId            : 'your-app-id',
            autoLogAppEvents : true,
            xfbml            : true,
            version          : 'v3.2'
          });
        };
      
        (function(d, s, id){
           var js, fjs = d.getElementsByTagName(s)[0];
           if (d.getElementById(id)) {return;}
           js = d.createElement(s); js.id = id;
           js.src = "https://connect.facebook.net/en_US/sdk.js";
           fjs.parentNode.insertBefore(js, fjs);
         }(document, 'script', 'facebook-jssdk'));
        `}
      </script>
    </Helmet>
  )
}

export default SEO
