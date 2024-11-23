<style>
    @import './styles.css';
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');
</style>  

<script>
  import { onMount } from 'svelte';

  onMount(()=>{
        const enableButton = document.querySelector('.add');
        const disbleButton = document.querySelector('.remove');
        const sidebar = document.querySelector('.sidebar');
        const header = document.querySelector('.header');
        const thestuff = document.querySelector('.thestuff');

        disbleButton.addEventListener('click', () => {
            console.log("clicked")
            sidebar.classList.remove('active'); 
            header.classList.remove('blur'); 
            thestuff.classList.remove('blur'); 
        }
        );
        enableButton.addEventListener('click', () => {
            console.log("clicked")
            sidebar.classList.add('active'); 
            header.classList.add('blur'); 
            thestuff.classList.remove('blur'); 
        }
        );
        document.querySelectorAll('a[target="_self"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.classList.add('ripple-effect');

            setTimeout(() => {
                targetElement.classList.remove('ripple-effect');
            }, 800); 
        }

        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

    })
</script>

<div class="header">
    <div class="iconthing">
    <img src="https://avatars.githubusercontent.com/u/148011228"/>
    <div>
        <h1>Frequently Asked Questions</h1>
<div class="comment">This covers some questions that are asked in support multiple times, so heres a couple of little explanations for each!</div>
</div>
<button class="sidebar-toggle add" aria-label="Toggle Sidebar">☰</button>
</div>
</div>
<div class="content">
<div class="sidebar" id="sidebar">
    <div class="topbit">
    <h2>Glossary</h2>
    <button class="sidebar-toggle remove" aria-label="Toggle Sidebar">☰</button>
</div>
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
    <div class="thestuff">
        <h2 class="notice">Decor on Vencord is currently broken because Discord changed UI stuff, should be fixed relatively shortly.</h2>
    <div id="Animated">
        <h1>Animated Decors</h1>
        Animated decors use APNGs, which to put simply are pngs as gifs. The file extension is just .png, not .apng. Unlike gifs, which only support something being transparent or opaque, APNGs support opacity, so your animated decors can have transparent elements.
        <br/><br/>
        To make an APNG, you can use <a href="https://ezgif.com/apng-maker">ezgif</a>. You can convert a gif to an apng, or make one using multiple images (frames.)
        <br/><br/>
        Using any animation program, you can export a PNG Sequence, then use those pngs to make the apng. You can animate over the template on another layer, then delete the template layer.
        <br/><br/>
        For free animation programmes, I reccomend <a href='https://krita.org/en/'>Krita</a> for PC.
        <br/>
      </div>

      <div id="Mobile">
        <h1>Using Decor on Mobile</h1>
        To use Decor on mobile, you'll need to use a mobile client mod. Use your Vendetta fork of choice, or, on iOS you can use <a href='https://github.com/enmity-mod/enmity'>Enmity/Unbound</a> with VendettaCompat.
        <br/><br/>
        Add the plugin using the <a href="https://vd-plugins.github.io/proxy/decor-discord.github.io/vendetta-plugin/">proxied Vendetta plugin link</a> inside the app. The Decor Vendetta plugin is no longer supported, but is currently still functional.
      </div>

      <div id="NotShowingUp">
        <h1>Decors Not Showing Up</h1>
        First, decor doesn't work using Vencord on Firefox, only in the actual app, so if you're on the web it can't be helped.
        <br/><br/>
        If all of the decors show up as broken images, see if you can access <a href='https://decor.fieryflames.dev/api/users/1076130548797415434'>this</a> page. If you can't, something in your network is blocking it, and decor won't work unless you're able to get it unblocked.
        <br/><br/>
        Incase it isn't blocked, in Vencord open DevTools (with CTRL + SHIFT + I), and look for decors response in the network tab. If it returns 200, then the cdn is being blocked, usually by parental controls or firewalls..
      </div>
      

      <div id="FailedToFetch">
        <h1>Failed to Fetch</h1>
        When trying to authorise the decor bot, you might see "Failed to Fetch". It might be an internet thing, try refreshing, reinstalling the plugin or reinstalling/repairing vencord
        <br/><br/>
        If you see it when trying to upload a decor, try refreshing or reauthorising, otherwise it could be because there is something wrong with the image you are trying to upload. <br/><br/> There is a 2mb file size limit - so try to keep it below that. Decors are automatically resized to 288x288 after being uploaded anyway, so that is a suitable size to use when uploading. For APNGs, try to reassemble the apng using <a href="https://ezgif.com/apng-maker">EZGIF's APNG Maker.</a>
      </div>

      <div id="Template">
        <h1>Is there a template?</h1>
        The template is pinned in the support channel, but <a href='https://raw.githubusercontent.com/decor-discord/.github/main/assets/template.png'>this</a> is the link to it. It's 768x768, and the avatar itself is 640x640.
      </div>

      <div id="Vencord">
        <h1>Can people without vencord see my decor?</h1>
        No, people without vencord can't see your decor. Other users can only see them if using the decor plugin, on vencord or any of the mobile mods mentioned earlier.
      </div>

      <div id="AlreadyExists">
        <h1>Decoration already exists</h1>
        If you've been given a decor to use by someone else, and it says it already exists, then you need to change something about the image to give it a new hash. This could be editing the metadata, resizing, or changing even a single pixel.
        <br/><br/>
        This happens because decor uses hashes to identify images. If two images have identical hashes then it knows that the decor already exists, and prevents the duplicate from being reuploaded.
      </div>
      
      <div id="CantUse">
        <h1>Why can't I use my decor after uploading?</h1>
        After a decor is uploaded, it is pending review. This means that you can't use it until a reviewer goes through uploaded decors and accept those that follow the guidelines to prevent innapropriate decors from being used. To receive updates on your decoration's review status, join <a href='https://discord.gg/dXp2SdxDcP'>Decor's Discord server.</a>
        <h3>Please have patience. Reviewers have their own lives and are busy, there are more important things than an avatar decoration. Don't ping people begging them to review your decor, as that makes you more likely to be banned from uploading.</h3>
      </div>
    
      <div class="notice white"> if u have any other questions, don't be afraid to ask in support! if there are any questions you'd like added to the faq, feel free to dm&nbsp;<a href="https://discord.com/users/323205750262595595"> me!</a> </div>

    </div>
</div>