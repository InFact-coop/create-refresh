import Head from "next/head"

function SEO({ title, description, image, cartoonId }) {
  const defaultDescription = "Try the EU Compliant Meme Generator for yourself"
  const defaultTitle = "Make ANY Meme EU Compliant!"
  const defaultImage = "https://i.ibb.co/VTRBHb7/metadata.png"
  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta charSet="UTF-8" />
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta
        name="og:image"
        property="og:image"
        content={image || defaultImage}
      />
      <meta name="og:image:type" property="og:image:type" content="image/png" />
      <meta property="og:image:height" content="675" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:locale" name="og:locale" content="en" />
      <meta property="og:type" content="website" />
      <meta
        name="og:url"
        property="og:url"
        content={
          cartoonId
            ? `https://www.compliantmemegenerator.eu/cartoon?cartoonId=${cartoonId}&formCompleted=false&fromIndex=false`
            : "https://www.compliantmemegenerator.eu"
        }
      />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="fb:app_id" content="1627837104015374" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          window.twttr = (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0],t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
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
            appId            : 1627837104015374,
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
      {cartoonId && (
        <script src="//platform.twitter.com/oct.js" type="text/javascript" />
      )}
      {cartoonId && (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `twttr.conversion.trackPid('o167k', { tw_sale_amount: 0, tw_order_quantity: 0 });`,
          }}
        />
      )}
      {cartoonId && (
        <noscript>
          <img
            height="1"
            width="1"
            style="display:none;"
            alt=""
            src="https://analytics.twitter.com/i/adsct?txn_id=o167k&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0"
          />
          <img
            height="1"
            width="1"
            style="display:none;"
            alt=""
            src="//t.co/i/adsct?txn_id=o167k&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0"
          />
        </noscript>
      )}
      /> )}
    </Head>
  )
}

export default SEO
