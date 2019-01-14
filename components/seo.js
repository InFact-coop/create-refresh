import Head from "next/head"

function SEO({ title, description, image }) {
  const defaultDescription = "Try the EU Compliant Meme Generator for yourself"
  const defaultTitle = "Make ANY Meme EU Complaint!"
  const defaultImage =
    "https://ih0.redbubble.net/image.453375841.1314/flat,550x550,075,f.u1.jpg"

  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{title || ""}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="title" content={title || defaultTitle} />
      <meta name="og:title" content={title || defaultTitle} />
      <meta name="og:type" content="website" />
      <meta name="og:description" content={description || defaultDescription} />
      <meta name="og:image" content={image || defaultImage} />
      <meta name="og:image:secure_url" content={image || defaultImage} />
      <meta name="og:image:type" content="image/jpg" />
      <meta name="og:image:height" content="630" />
      <meta name="og:image:width" content="1200" />
      <meta name="og:locale" content="en" />
      <meta
        name="og:url"
        content="https://eu-compliant-meme-generator.herokuapp.com/"
      />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          window.twttr = (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0],t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);js.id = id;
            js.src = "https://platform.twitter.com/widgets.js:";
            fjs.parentNode.insertBefore(js, fjs);
            t._e = [];
            t.ready = function(f) {t._e.push(f);
            }; 
          return t;
        }(document, "script", "twitter-wjs"));`,
        }}
      />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `window.fbAsyncInit = function() {
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
           js.src = 'https://connect.facebook.net/en_US/sdk.js';
           fjs.parentNode.insertBefore(js, fjs);
         }(document, 'script', 'facebook-jssdk'));`,
        }}
      />
    </Head>
  )
}

export default SEO
