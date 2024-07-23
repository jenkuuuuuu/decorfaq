import decorLogo from './assets/decorlogo.webp'
import './App.css'

function App() {

  return (
    <>
      <div className='main'>
        <div className="content">
          <img src={decorLogo} className="logo decor" alt="React logo" />
          <h1 className='title'> frequently asked support questions</h1>
          <h4>this covers some questions ive seen asked in support several times, so heres a little explanation for each</h4>
          dont ping random people for support, or reviewers to review your decor - people have lives.
          <br/>


          <div className="glossaryContainer">
          <div className='glossary'>
            <h1>glossary</h1>
            <ul>
              <a href="#Animated" target="_self"><li>animated decors</li></a>
              <a href="#Mobile" target="_self"><li>using decor on mobile</li></a>
              <a href="#NotShowingUp" target="_self"><li>decors not showing up</li></a>
              <a href="#FailedToFetch" target="_self"><li>failed to fetch</li></a>
              <a href="#Template" target="_self"><li>is there a template</li></a>
              <a href="#Vencord" target="_self"><li>can people without vencord see my decor</li></a>
              <a href="#AlreadyExists" target="_self"><li>decoration already exists</li></a>
              <a href="#CantUse" target="_self"><li>why cant i use my decor after uploading</li></a>
            </ul>
          </div>
          </div>

        <p id="Animated">
          <h1>Animated Decors</h1>
          Animated decors use APNGs, which to put simply are pngs as gifs. The file extension is just .png, not .apng. Unlike gifs, which only support something being transparent or opaque, APNGs support opacity, so your animated decors can have transparent elements.
          <br/><br/>
          To make an APNG, you can use <a href="https://ezgif.com/apng-maker">ezgif</a>. You can convert a gif to an apng, or make one using multiple images (frames.)
          <br/><br/>
          Using any animation program, you can export a PNG Sequence, then use those pngs to make the apng. You can animate over the template on another layer, then delete the template layer.
          <br/><br/>
          For free animation programmes, I reccomend <a href='https://krita.org/en/'>Krita</a> for PC.
          <br/>
        </p>

        <p id="Mobile">
          <h1>Using Decor on Mobile</h1>
          To use Decor on mobile, you'll need to use a mobile client mod. Currently, <a href="https://github.com/pyoncord/Pyoncord">Bunny/Pyoncord</a> is the main maintained Vendetta fork. On iOS, you can use <a href='https://github.com/enmity-mod/enmity'>Enmity/Unbound</a> with VendettaCompat.
          <br/><br/>
          Add the plugin using the <a href="https://vd-plugins.github.io/proxy/decor-discord.github.io/vendetta-plugin/">proxied Vendetta plugin link</a> inside the app.
        </p>

        <p id="NotShowingUp">
          <h1>Decors Not Showing Up</h1>
          First, decor doesn't work using Vencord on Firefox with the userscript, only in the actual app. We can't do anything about that as it's due to cors, please don't ask for support if this is the case.
          <br/><br/>
          If all of the decors show up as broken images, see if you can access <a href='https://decor.fieryflames.dev/api/users/1076130548797415434'>this</a> page. If you can't, something in your network is blocking it, and decor won't work unless you're able to get it unblocked.
          <br/><br/>
          Incase it isn't blocked, in Vencord open DevTools (with CTRL + SHIFT + I), and look for decors response in the network tab. If it returns 200, then the cdn is being blocked, usually by parental controls or firewalls..
        </p>
        

        <p id="FailedToFetch">
          <h1>Failed to Fetch</h1>
          When trying to authorise the decor bot, you might see "Failed to Fetch". It might be an internet thing, try refreshing, reinstalling the plugin or reinstalling/repairing vencord
          <br/><br/>
          If you see it when trying to upload a decor, try refreshing or reauthorising, otherwise it could be because there is something wrong with the image you are trying to upload. <br/><br/> There is a 2mb file size limit - so try to keep it below that. Decors are automatically resized to 288x288 after being uploaded anyway, so that is a suitable size to use when uploading. For APNGs, try to reassemble the apng using <a href="https://ezgif.com/apng-maker">EZGIF's APNG Maker.</a>
        </p>

        <p id="Template">
          <h1>Is there a template?</h1>
          The template is pinned in the support channel, but <a href='https://raw.githubusercontent.com/decor-discord/.github/main/assets/template.png'>this</a> is the link to it. It's 768x768, and the avatar itself is 640x640.
        </p>

        <p id="Vencord">
          <h1>Can people without vencord see my decor?</h1>
          No, people without vencord can't see your decor. Other users can only see them if using the decor plugin, on vencord or any of the mobile mods mentioned earlier.
        </p>

        <p id="AlreadyExists">
          <h1>Decoration already exists</h1>
          If you've been given a decor to use by someone else, and it says it already exists, then you need to change something about the image to give it a new hash. This could be editing the metadata, resizing, or changing even a single pixel.
          <br/><br/>
          This happens because decor uses hashes to identify images. If two images have identical hashes then it knows that the decor already exists, and prevents the duplicate from being reuploaded.
        </p>
        
        <p id="CantUse">
          <h1>Why can't I use my decor after uploading?</h1>
          After a decor is uploaded, it is pending review. This means that you can't use it until a reviewer goes through uploaded decors and accept those that follow the guidelines to prevent innapropriate decors from being used.
          <h3>Please have patience. Reviewers have their own lives and are busy, there are more important things than an avatar decoration. Don't ping people begging them to review your decor, as that makes you more likely to be banned from uploading.</h3>
        </p>



        <div>
          If there's anything else you'd like to see added to this page, let me know and I'll add it. If your question isn't answered here, or the provided solutions don't work - don't hesitate to ask.
        </div>
        </div>
      </div>
    </>
  )
}

export default App
