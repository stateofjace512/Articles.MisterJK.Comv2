import React, { useState } from 'react';
import Navigation from "../../components/Navigation.jsx";
import Footer from "../../components/Footer.jsx";
import NoiseBackground from "../../components/NoiseBackground.jsx";
import EmbossedButton from "../../components/EmbossedButton.jsx";

export default function ArticlesBlogsPage() {
  const [currentArticle, setCurrentArticle] = useState(0);
 
  const articles = [
    {
      title: "Prelude",
      date: "9/19/2025",
      audio_file: "/georgia_wixen_prelude_tstt.mp3",
      content: `PRELUDE<br><br>Hi everyone, my name is Georgia LaBelle Smith.
I go by a few pseudonyms online—Georgia Washington, Georgia Wixen—but for the purposes of this blog, it’s best to go by my real name: Georgia Smith.

I’m a financial analyst for a private equity firm, and I’ve been working in finance for six years.
I’m 26 years old, I’m from Tennessee, and I’d like to think of myself as a down-to-earth gal.

Now that the dating-app-style intro is out of the way, time for some truth.

Jake and I met over Discord in early 2024. We talked a lot about music and lyrics. He mentioned that, back in middle school, he had mixed a few instrumental ambient tracks, and said he’d love to explore some new musical projects.

Flash forward to April 2024, about two months after meeting Jake—I went through a forced recovery after a relapse with self-harm and suicidal ideation.
When I came out in late May, Jake told me he had found someone to sing on his first track: Harley Towers – Santa’s on PTO. I was ecstatic for him, though admittedly frustrated with myself for not stepping into the spotlight sooner.
By May 2024, I was coming home from work to my then-husband, and I had an epiphany: I really, truly hated that man. I started writing revenge-style lyrics to Jake. He clung to them instantly. He called them “magnificent” and “high-stakes anger.” He told me I needed to let myself feel it—and, of course, that I needed to leave my husband.

That’s when we began sketching out what would become the first version of the Sweet Tea Tragedies EP. At the same time, my old friends Jasmine and Danica were working with Jake and me on The Nice Girls album.

Balancing singing for The Nice Girls and writing lyrics for what felt like a hopeless EP, Jake told me: Relax, let it flow. The more you force it, the harder it gets to breathe. And of course, he was right—because when isn’t he?
It was during that breathing period that I wrote the title track for the original Sweet Tea Tragedies EP. We eventually scrapped it because the tone didn’t quite feel like me.

See, I’ve always seen myself as a punk-rock kind of girl—the type to sing-scream Metallica at 2 a.m. in the car until the anger fades. But life, strangely enough, led me to country.
Country doesn’t force you to spell everything out. It lets you layer metaphor carefully, adding a “could it be?” mystery to your songs. And that’s exactly what we did.`
    },
    {
      title: "Track 1",
      date: "9/19/2025",
      audio_file: "/georgia_wixen_track1_tstt.mp3",
      content: `The first song, Y'all Can Wait, came right after I got out of impatient. I wrote it almost as a love letter to myself, or maybe a better word is promise. It was me saying, "Hey, it's okay Georgia, if they can take their time, so can you.
Stop rushing". And that's what birthed Y'all Can Wait. It wasn't about laziness or excuses, just survival.
I'd spent years sprinting toward everyone else's needs, co-workers, family, friends, even strangers, until my body and brain finally said, enough. I was bleeding myself dry and apologizing for it. Like somehow, it was my fault for not being bulletproof.
Y'all Can Wait was me drawing the line. If I show up late, if I don't show up at all, that's my burden to carry. Why is everyone else act impressed when I take care of myself? Healing is slow, it's messy, and it doesn't come with a countdown.
And writing those words, I won't twist just to fit your view, felt like acknowledgement. I acknowledged that it was okay to move slower, to not apologize, to be okay with the silence in between. Moving on to a segment of my life I hate to remember, but love to complain about.`
    },
    {
      title: "Track 2",
      date: "9/19/2025",
      audio_file: "/georgia_wixen_track2_tstt.mp3",
      content: `The second track on the EP was me trying to untangle (pun intended) the chaos of my divorce. It was ugly. Swinging from, you're gonna get it, bitch, I'll do better, I promise, in the span of a single argument.
It felt like sitting in a salon chair and hearing the stylist say, "ooh baby, I'll only take off an inch". Then walking out with a short uneven bob when you swore you just asked for bangs. That's what being married to him was like.
I didn't come in for wisdom, and I definitely didn't come in for life lessons. I came in for bangs. Instead, he kept chopping, dyeing me down, trimming, until I didn't even recognize myself anymore.
So I wrote Hair Me Out. This track was just me taking back my scissors. 

Divorce wasn't pretty. Hell, it was foils and bleach and the stink of chemicals. But it was also a reset, a middle finger blowout, a way of saying, "You cut my hair, so I cut you off". I leaned into the humor of it, because sometimes that's the only way to process pain.
Comparing a toxic marriage to a bad haircut made it sting a little less, but underneath the word play was something raw. I was finally trimming off the dead weight, finally letting myself grow back in my own shape.`
    },
    {
      title: "Track 3",
      date: "9/19/2025",
      audio_file: "/georgia_wixen_track3_tstt.mp3",
      content: ` I don't even know how to package this one neatly.
My husband, my husband, was cheating on me with our old realtor. Yeah, you heard that right. Not a coworker, not some mysterious stranger, but the woman who literally walked us through the house we ended up buying together.
You can't make this shit up. So I did what I do best. I wrote it down.
That's how Cry Me a Realtor came to be. The song's a blend of heartbreak and stand-up comedy, because when your marriage blows up in a way this absurd, you either laugh about it or drown. I mean, picture this.
Me walking back into the house to grab my coat and finding her, my realtor, in my robe. That's not just betrayal. That's camp.
That's parody-level audacity. Lyrically, I leaned all the way into the real estate metaphors. Foundations cracking, houses listing hardwood tears.
It's all there. Divorce is already a transaction. Legal fees, signatures, assets split like furniture.
So why not slap a for sale sign on the whole mess and hand it to the person who brokered the deal behind my back? Cry Me a Realtor was not me mourning the loss of love. It was me calling bullshit with a fucking smirk. Another middle finger dressed up in a southern twang.
Because if you're gonna betray me with the woman who once sold me a mortgage, then honey, I'm gonna sell you for parts in a chorus.`
    },
    {
      title: "Track 4",
      date: "9/19/2025",
      audio_file: "/georgia_wixen_track4_tstt.mp3",
      content: `We all have that one person we'd personally bring back the electric chair for, right? I know I do. That's where In Contempt came from.
Divorce wasn't just about paperwork for me. It felt like standing in front of a fucking jury every day with him playing the victim in a pressed suit while I was standing there with the evidence. He knew how to spin it.
Calm, collected, a smile that never looked rehearsed while I got labeled the crazy one. That's what abusers do. Rewrite the narrative.
Scrub their fingerprints off the crime scene and let you look like the one who snapped. So I put it on trial. Every verse is cross-examination.
Every chorus a verdict. He called it love. I called it Georgia is about to snap and murder you.
He wanted forgiveness. I handed him contempt. Because why would I grant him peace when he never once cared about mine? What I love about this song is that it let me weaponize the courtroom metaphor.
A gavel, the jury, cross-exams, closing remarks. I finally feel like I wasn't the one sitting in the hot seat. For once, I was the one laying out the evidence and he was the one squirming under oath.
I didn't need justice. I didn't need mercy. I needed the stage to say out loud that I was done swallowing my own rage just to keep him comfortable.
In contempt was my final ruling. Case closed.`
    },
    {
      title: "Track 5",
      date: "9/19/2025",
      audio_file: "/georgia_wixen_track5_tstt.mp3",
      content: ` By the time the divorce papers were signed, I couldn't stop thinking about one thing.
What if I had just said "no" at the altar? What if instead of nodding along while my whole family watched, I'd had the guts to open my mouth and say, "I don't". How much of my life would have been different? How much pain would have been cut short? That's where I Do (I don't) came from. It was pure imagination, sure, but also a reclamation.
A way of rewriting the moment I never gave myself. Because the truth is, standing up there in that dress with my hands shaking and the preacher smiling, I already knew something was wrong. I knew I wasn't safe.
I knew I wasn't known, but I swallowed it because that's what good wives are supposed to do. This song is me giving myself that altar scene back, except this time I say it out loud. I do, I don't.
It's defiance wrapped in for the third time, middle fingers. It's the runaway bride fantasy I didn't get to live in the moment, and instead of being haunted by the silence I chose, I get to end this record with a door slam, a goodbye.
The whole EP builds on grief and rage, but I do, I don't is different. It's the release valve. It's the point where anger turns into freedom, where fuck you doesn't just mean pain, it means peace.`
    },
    {
      title: "Outro",
      date: "9/19/2025",
      audio_file: "/georgia_wixen_outro_tstt.mp3",
      content: `I want to say, from the bottom of my heart, to everyone who has listened to the pre-singles:
Thank you.

For everything. You all make me the happiest woman alive.

And to my ex-husband?
Screw you.`
    }
  ];


  const handlePrevious = () => {
    if (currentArticle > 0) {
      setCurrentArticle(currentArticle - 1);
    }
  };

  const handleNext = () => {
    if (currentArticle < articles.length - 1) {
      setCurrentArticle(currentArticle + 1);
    }
  };

  const handleSelectChange = (e) => {
    setCurrentArticle(parseInt(e.target.value));
  };

  const currentArticleData = articles[currentArticle];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <NoiseBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative z-10 min-h-screen pt-32 pb-0 px-4">
        <div className="w-full max-w-4xl mx-auto">
          <div className="rounded-2xl border border-neutral-300 bg-gradient-to-b from-white to-neutral-100 shadow-[0_10px_30px_rgba(0,0,0,0.15)] ring-1 ring-black/5 p-6 md:p-10">
            
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-800 drop-shadow-sm mb-4">
                Track-by-Track Notes
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed mb-6">
                The Sweet Tea Tragedies
              </p>
              
              {/* Article Selector */}
              <div className="max-w-md mx-auto">
                <select
                  value={currentArticle + 1}   // show 1-based in dropdown
                  onChange={(e) => setCurrentArticle(parseInt(e.target.value) - 1)} // map back to 0-based
                  className="w-full rounded-md border border-neutral-300 bg-gradient-to-b from-white to-neutral-200 text-neutral-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_2px_6px_rgba(0,0,0,0.12)] px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/60"
                >
                  <option value="1">Prelude</option>
                  <option value="2">Track 1</option>
                  <option value="3">Track 2</option>
                  <option value="4">Track 3</option>
                  <option value="5">Track 4</option>
                  <option value="6">Track 5</option>
                  <option value="7">Outro</option>
                </select>
              </div>
            </div>

            {/* Article Content */}
            <div className="mb-8">
              <div className="rounded-xl border border-neutral-300 bg-gradient-to-b from-white to-neutral-50 shadow-[0_10px_20px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.9)] p-6 md:p-8">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">
                    {currentArticleData.title}
                  </h2>
                  <p className="text-sm text-neutral-600">{currentArticleData.date}</p>
                </div>

                {/* Audio Player at the top */}
                {currentArticleData.audio_file && (
                  <div className="mb-6">
                    <audio
                      controls
                      className="w-full"
                      src={currentArticleData.audio_file}
                    >
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
                
                <div 
                  className="prose prose-neutral max-w-none text-neutral-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: currentArticleData.content }}
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center">
              <EmbossedButton
                as="button"
                onClick={handlePrevious}
                disabled={currentArticle === 0}
                className="px-4 py-2 text-sm"
              >
                <span>← Previous</span>
              </EmbossedButton>
              
              <span className="text-sm text-neutral-600">
                Article {currentArticle + 1} of {articles.length}
              </span>
              
              <EmbossedButton
                as="button"
                onClick={handleNext}
                disabled={currentArticle === articles.length - 1}
                className="px-4 py-2 text-sm"
              >
                <span>Next →</span>
              </EmbossedButton>
            </div>
          </div>
          <Footer />
        </div>  
      </main>
    </div>
  );
}
