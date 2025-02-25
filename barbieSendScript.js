async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
BARBIE

[narrator] Since the beginning of time, since the first little girl ever existed, there have been dolls.

But the dolls were always and forever baby dolls.

The girls who played with them could only ever play at being mothers.

Which can be fun, at least for a while, anyway.

Ask your mother.

This continued until…

[“Thus Spoke Zarathustra” plays]

[warning buzz]

[ting]

[narrator] Yes, Barbie changed everything.

Then, she changed it all again.

All of these women are Barbie, and Barbie is all of these women.

She might have started out as just a lady in a bathing suit, but she became so much more.

She has her own money, her own house, her own car, her own career.

Because Barbie can be anything, women can be anything.

And this has been reflected back onto the little girls of today in the Real World.

Girls can grow into women, who can achieve everything and anything they set their mind to.

Thanks to Barbie, all problems of feminism and equal rights have been solved.

At least that’s what the Barbies think.

After all, they’re living in Barbie Land.

Who am I to burst their bubble?

And here is one of those Barbies now, living her best day every day.

[“Pink” playing]

♪ When I wake up ♪

♪ In my own pink world ♪

♪ I get up out of bed and wave to my homegirls ♪

♪ Hey, Barbie, hey ♪

♪ She’s so cool ♪

♪ All dolled up ♪

♪ Just playing chess by the pool ♪

♪ Come on, we got important things to do ♪

♪ It’s her and her and me and you ♪

♪ And pink goes with everything ♪

♪ Beautiful from head to toe ♪

♪ I’m read’ to go You know, you know ♪

♪ It’s pink Good enough to drink ♪

♪ We like other colors but ♪

♪ Pink just looks so good on us ♪

[sighing]

♪ What you wearing? Dress or suit? ♪

♪ Either way, that power looks so good on you ♪

♪ Hey, Barbie I like your style ♪

♪ If that was really a mirror you’d see a perfect smile ♪

♪ Round and round and round and round and ♪

♪ That’s my Barbie ♪

♪ Go Barbie, go Barbie ♪

♪ That’s my Barbie ♪

♪ Ooh, ooh, ooh ♪

♪ That’s my Barbie ♪

♪ Go Barbie, go Barbie ♪

♪ That’s my Barbie ♪

♪ Ooh, ooh, ooh ♪

♪ Come on, we got important things to do ♪

♪ It’s her and her and me and you ♪

♪ And pink goes with everything ♪

♪ Beautiful from head to toe ♪

♪ I’m read’ to go You know, you know ♪

♪ It’s pink ♪

♪ Pretty pink ♪

♪ Good enough to drink ♪

♪ Oh, yeah ♪

♪ We like other colors but ♪

♪ Pink just looks so good on us ♪

♪ P, pretty ♪

♪ I, intelligent ♪

♪ N, never sad ♪

♪ K, cool ♪

[narrator] When you’re playing with Barbies…

Hi, Barbie.

[narrator] …nobody bothers to walk them down the stairs and out the door, et cetera.

You just pick them up and put them where you want them to go.

[Lizzo] ♪ You’d better fly Girl, yeah, yeah ♪

[narrator] You use your imagination.

[Lizzo] ♪ Hey, I was still singin’ ♪

Hi, Barbie.

Hi, Skipper.

Hi, Barbie.

And Midge.

[narrator] Midge was Barbie’s pregnant friend.

[Lizzo] ♪ Hey, Midge ♪

Let’s not show Midge, actually.

She was discontinued by Mattel because a pregnant doll is just too weird.

Anyway, Barbie has another big day ahead of her.

♪ Pink ♪

Hi, Barbie!

♪ Goes with everything ♪

[Barbies] Hi, Barbie.

Morning, Barbie. Hi.

Good morning.

Good morning.

Another great day.

Good morning, Barbie.

Hi.

Hey, ladies. Hi.

Good morning!

[jackhammer clattering]

Everybody, turn to the Barbie next to you. Tell her how much you love her.

Compliment her.

Reporter Barbie, you can ask me any question you want.

Well, how come you’re so amazing?

No comment. [laughs]

♪ Black Barbie, President Black Barbie, President ♪

No, seriously, no comment.

[all laughing]

Ah, I love you guys.

The Nobel Prize for Journalism goes to… Barbie.

[all applauding]

I work very hard, so I deserve it.

And the Nobel Prize for Literature goes to… Barbie.

[all applauding]

You’re the voice of a generation.

I know.

In our assessment, money is not speech, and corporations have no free speech rights to begin with.

So any claim on their part to be exercising a right is just their attempt to turn our democracy into a plutocracy.

[all applauding]

This makes me emotional, and I’m expressing it.

I have no difficulty holding both logic and feeling at the same time.

And it does not diminish my powers.

It expands them.

[all cheering, applauding]

♪ Oh, pink ♪

Hi, Barbie.

What can’t Barbie do?

Hi, Barbie.

Yay, space!

[high-five echoes]

Gosh.

♪ See you later ♪

[narrator] Barbie has a great day every day, but Ken only has a great day if Barbie looks at him.

[lively chatter]

Hi, Barbie!

Hi, Ken.

Hi, Barbie!

Hi, Barbie!

Hi, Barbie.

[groans]

Hi, Ken.

Hi, Ken.

Hi, Ken.

Hi, Ken.

Hi, Ken.

I got us both ice creams.

Cool.

Hi, Barbie.

Hi, Barbie.

Hi, Barbie.

Hi, Barbie.

Hi, Barbie.

Hi, Barbie.

Hi, Barbie!

Hi, Ken.

Hi, Barbie.

Hi, Ken.

Hi, Barbie.

Hi, Barbie.

Hi, Barbies.

Bye, Barbies.

Bye, Barbie.

Hi, Barbie.

Oh, hi, Allan.

[narrator] There are no multiples of Allan. He’s just Allan.

Yeah, I’m, I… confused about that.

Hey, Barbie. Check me out.

[sighs]

Ken!

Ooh!

[screaming] No!

Oh!

[gasps]

Whoa!

[Ken] Oh, no!

[all gasp, shriek]

Oh, my God!

Oh, no!

[Ken] That’s gotta hurt.

Ken.

Oh, hey, Barbie.

Hi.

How much of that did you see?

We saw the whole thing.

Let’s get you up on your feet, Ken. There you go.

You guys are so strong.

Use your legs. There he is.

You okay?

Yep. Totally.

[laughs] Looks like this beach was a little too much beach for you, Ken.

If I wasn’t severely injured, I would beach you off right now, Ken.

I’ll beach off with you any day, Ken.

Hold my ice cream, Ken.

All right, Ken, you’re on.

Let’s beach off.

Anyone who wants to beach him off has to beach me off first.

I will beach both of you off at the same time.

But you don’t even know how to beach yourself off.

How you gonna beach both of us off?

[Barbie] Uh, Kens?

It doesn’t make sense.

Why are you getting emotional?

So you can beach yourself off!

Come on, Kens. Nobody’s gonna beach anyone off.

Okay?

Let’s go.

[exhales]

Okay, okay.

Okay.

You did so well.

You still hurt?

We’ll get you fixed up.

Go!

Go!

Barbie, hold my hand!

You’re okay.

Stay with me, Barbie!

[shutter flashes]

Great.

Not even broken. You’ll be fine.

Shredding waves is much more dangerous than people realize.

You’re very brave, Ken.

Thank you, Barbie.

Yeah.

You know surfer is not even my job.

I know.

And it is not lifeguard, which is a common misconception.

Very common.

Because actually my job… it’s just beach.

Right.

And what a good job you do at beach.

You should heal up in no time.

Actually, in the time that it took for me to say that sentence, you healed.

Fantastic.

Nice.

Hey, Barbie.

Yeah?

Can I come to your house tonight?

Sure. I don’t have anything big planned.

[grunts softly] Yes.

Just a giant blowout party with all the Barbies and planned choreography and a bespoke song.

You should stop by.

So cool. [chuckles]

Yeah.

Okay. Bye.

Okay. Bye. Goodbye.

[“Dance The Night” playing]

♪ Baby, you can find me under the lights ♪

♪ Diamonds under my eyes ♪

♪ Turn the rhythm up Don’t you wanna just ♪

♪ Come along for the ride? ♪

♪ Ooh, my outfit so tight ♪

♪ You can see my heartbeat tonight ♪

♪ I can take the heat Baby, best believe ♪

♪ That’s the moment I shine ♪

♪ ‘Cause every romance shakes and it bends ♪

♪ Don’t give a damn ♪

♪ When the night’s here I don’t do tears ♪

♪ Baby, no chance ♪

♪ I could dance, I could dance I could dance ♪

♪ Watch me dance Dance the night away ♪

♪ My heart could be burnin’ ♪

♪ But you won’t see it on my face ♪

♪ Watch me dance ♪

♪ Dance the night away ♪

♪ Uh-huh ♪

♪ I’ll still keep the party runnin’ ♪

♪ Not one hair out of place ♪

[echoing] ♪ Place, place ♪

♪ Lately, I’ve been movin’ close to the edge ♪

♪ Still be lookin’ my best ♪

♪ I stay on the beat, you can count on me ♪

♪ I ain’t missin’ no steps ♪

♪ ‘Cause every romance shakes and it bends ♪

♪ Don’t give a damn ♪

♪ When the night’s here… ♪

Hi, Barbie.

Hi, Ken.

♪ I could dance, I could dance I could dance ♪

♪ Watch me ♪

Looking good, Barbie.

Thanks, Ken.

♪ Dance the night away ♪

♪ My heart could be burnin’ ♪

♪ But you won’t see it on my face ♪

♪ Watch me dance ♪

♪ Dance the night away ♪

♪ I’ll still keep the party runnin’ ♪

♪ Not one hair out of place ♪

Oh, hi, Ken.

[chuckles] Hi!

Yes, yes, yes!

Hi, Barbie.

Hi, Barbie.

Barbies!

What’s up, Ken?

♪ I don’t play safe ♪

♪ Don’t you know about me? ♪

♪ Uh-huh ♪

♪ I could dance, I could dance I could dance ♪

Hey, Barbie. Check me out.

♪ I’ll still keep the party runnin’ ♪

♪ Not one hair out of place ♪

Bet you can’t do a flip like that, Ken!

[angrily] What?

This is a real rager, Barbie.

Thanks, Barbie. Gosh, this night is just perfect.

It’s perfectly perfect.

And you look so beautiful, Barbie.

Thanks, Barbie. I feel so beautiful.

So do I.

This is the best day ever.

It is the best day ever.

And so is yesterday, and so is tomorrow, and so is the day after tomorrow and even Wednesdays and every day from now until forever.

Yeah, Barbie!

[all cheering]

You guys ever think about dying?

[needle scratches record]

[music, chatter halt]

I don’t know why I just said that.

I’m just dying to dance.

[music resumes]

[cheering]

♪ I don’t play safe ♪

♪ Don’t you know about me? ♪

♪ Uh-huh ♪

♪ I could dance, I could dance I could dance ♪

♪ Dance the night ♪

[“Silver Platter” playing]

♪ Give you the world on a silver platter ♪

♪ But it ain’t gon’ matter ♪

♪ Give you the world on a silver platter ♪

♪ But it ain’t gon’ matter ♪

[crickets chirping]

Wow. [chuckles]

You can go now.

I thought I might stay over tonight.

Why?

Because we’re girlfriend/boyfriend.

To do what?

I’m actually not sure.

Oh, but I don’t want you here.

Mmm-hmm.

Is it Ken?

Ken’s just a really good friend.

And this is my Dreamhouse. It’s Barbie’s Dreamhouse.

It’s not Ken’s Dreamhouse. Right?

[laughs] Right as always.

Okay. And it’s girls’ night.

Come on, Barbie! Slumber party!

Hurry up. The President’s here.

I am. You’re welcome.

Every night is girls’ night.

Mmm-hmm. Every night. Forever.

[“Girls Just Want To Have Fun” playing on speakers]

Every night.

Forever and ever.

Good night.

Good night.

[Barbies scream and laugh]

[whispers] I love you, too.

[Barbies] Girls’ night! Girls’ night!

[chuckles]

Girls’ night! Girls’ night!

I can’t. I gotta go.

[Barbies chanting] Girls’ night! Girls’ night! Girls’ night!

Girls’ night! Girls’ night! Girls’ night!

Good night, Barbies! I’m definitely not thinking about death anymore.

[birds chirping]

[birds chirping]

[birds chirping]

[music blares]

♪ When I wake up in my own pink world ♪

Hi, Barbie.

♪ I get up out of bed and wave to my homegirls ♪

♪ Hey, Barbie ♪

♪ Hey ♪

♪ Why so stressed? ♪

Hi, Barbie.

♪ Could it be those irrepressible… ♪

Hi, Barbie.

♪ …thoughts of death ♪

♪ Come on, we got important things to… Ooh! ♪

♪ It’s her, and her and me and you ♪

♪ And pink goes with everything ♪

♪ Oh, that’s cold ♪

♪ Beautiful from head to toe ♪

♪ I’m read’ to go You know, you know ♪

♪ It’s pink It’s gonna be all right ♪

♪ Good enough to drink ♪

♪ We like other colors but ♪

♪ Pink just looks so good on us ♪

♪ P, panic ♪

♪ I, I’m scared ♪

[spitting]

♪ N, nauseous ♪

♪ K, death ♪

♪ That’s my Barbie ♪

♪ Go Barbie, go Barbie ♪

♪ That’s my Barbie Ooh, ooh, ooh ♪

Ahh!

[thuds]

[Lizzo] Oh. Ooh, girl, you okay?

Hi, Barbie.

I’m fine. A-okay.

You got it, Barbie.

Let’s go, Barbie!

Great cheer, Kens.

High five!

Hey, Barbie.

[Barbie grunts]

Come on, Barbie. Let’s run towards the water.

Okay.

[gasps]

Oh.

[grunting]

[gasping]

[gasps]

Oh! My feet!

[sighs]

[gasps] Oh, no.

[panting]

Yes! So good!

[grunting]

Hey, Barbie.

Hi.

Are you okay?

Hey, Barbie.

Yeah, Barbie. I just fell.

Fell?

I’m so embarrassed.

Barbie doesn’t get embarrassed.

I know.

Barbie, I don’t even have context for this, but my feet… my heels are on the ground.

I’m no longer on tiptoes.

That’s okay. Let me see.

[all gasp]

[screams] Flat feet! [retches]

[all screaming]

[retching]

[sobbing] Oh, no!

[retching]

Stop it, Ken.

I’m sorry. I’m sorry.

I know I’m Stereotypical Barbie and therefore don’t form conjectures concerning the causality of adjacent unfolding events, but some things have been happening that might be related.

[sighs]

Bad breath this morning, a cold shower, burnt waffle, and falling off my roof.

[gasps] You’re malfunctioning.

What? No, I’m just, I’m…

Am I?

I’ve never seen this kind of malfunction before. It’s usually just hair-related.

You know, you’re gonna have to visit Weird Barbie.

I have never had to visit Weird Barbie.

That’s because you’ve never malfunctioned.

I heard that she used to be the most beautiful Barbie of all, but then someone played with her too hard in the Real World.

[“Spice Up Your Life” playing]

♪ Colors of the world ♪

♪ Spice up your life ♪

♪ Every boy and every girl ♪

♪ Spice up your life ♪

♪ People of the world ♪

♪ Spice up your life ♪

♪ Ahh ♪

♪ Slam me to the left ♪

♪ If you’re having a good time ♪

♪ Shake it to the right ♪

And now she’s fated to an eternity of making other Barbies perfect while falling more and more into disrepair herself.

That, and we all call her Weird Barbie both behind her back and also to her face.

She’s so weird.

Why is she always in the splits?

[thunder rumbling]

[grunts] I would never wear heels if my feet were shaped this way.

Hello?

Woof.

[gasps]

Oh.

[plops]

Bark.

[plops]

Woof.

Bark.

Hey.

What’s cookin’, good-lookin’?

Hi.

Welcome.

Welcome to my Weirdhouse.

[grunts]

Hi, how are ya?

Nice to meet you.

Sorry about the dog crap. What can I do ya for?

I just had to come see you about my feet.

They’re, um…

Flat.

Yeah.

Never seen that before.

Really?

Whoa.

Okay. Well, can you, you know, fix them?

You’re Stereotypical Barbie, right?

Mmm-hmm.

[chuckles] That Ken of yours, he is one nice-looking little protein pot.

I guess.

I’d like to see what kind of nude blob he’s packing under those jeans. [sighs]

Anyway, what preceded this?

Oh, nothing.

A really fun game of volleyball.

That’s it?

Thoughts of death.

What is it?

[stammers] Maybe some thoughts of death?

Thoughts of death!

Is that a problem?

Oh.

What?

I’ve heard of this.

Of course, I didn’t think it was possible, but it’s real.

Oh, you’ve done it. You’ve opened a portal.

I didn’t open a portal.

[chuckles] Someone did. And now, there is a rip in the continuum that is the membrane between Barbie Land and the Real World, and if you wanna be Stereotypical Barbie perfect again, then, baby girl, you gotta go fix it.

Or you’re gonna keep going funny. Look at your upper thigh.

[gasps] What is that?

That’s cellulite.

That’s gonna spread everywhere.

What?

And then you’re gonna start getting sad and mushy and complicated.

No!

[hisses]

What do I have to do?

You have to go to the Real World.

Okay.

And you have to find the girl who’s playing with you.

Playing with me?

We’re all being played with, babe.

But usually there’s some kind of separation. Thanks.

There’s the girl and the doll. And never the twain shall cross.

The twain is crossing?

Yes.

And the girl who’s playing with you, she must be sad, and her thoughts and feelings and humanness are interfering with your dollness.

Why would she be sad?

We fixed everything so that all women in the Real World can be happy and powerful.

I don’t know, but if you ask me, you had something to do with this, too.

Me?

Takes two to rip a portal.

I can’t have.

I’ve only ever wanted for everything to stay exactly as it is.

Well, be that as it may, the two of you are becoming inextricably intertwined.

And you gotta help her to help yourself.

[girls’ voices echoing faintly]

So, should… Whoo!

So, what’ll it be then?

You can go back to your regular life and forget any of this ever happened, or you can know the truth about the universe.

The choice is now yours.

The first one. The high heel.

No. We’ll do a re-do.

You’re supposed to want to know.

I don’t.

Mmm. Babe, listen.

You have to want to know, okay? Do it again.

I’m not Adventure Barbie. I’m Stereotypical Barbie.

I’m like the Barbie you think of when someone says, “Think of a Barbie.”

That’s me.

I’m bummed. You’re a bummer. That’s a bummer.

Okay, I’m ready to forget now.

No! You’re doing this one!

I just gave you a choice so you could feel some sense of control.

So there is no option one?

No!

You have to fix the rip yourself.

Don’t blame me, blame Mattel. They make the rules.

[whining] Oh, I don’t want to.

Fine, get cellulite. I don’t care.

No! No, no, no. No. Okay. Yeah.

[sighs]

Send me through the portal.

Okay. There’s actually no portal.

Oh.

It’s a figure of speech.

It’s actually a sports car to a speedboat, to a rocket ship, to a tandem bike, to a camper van, fun, to a snowmobile, brr, which will take you most of the way to the state of Los Angeles, where you will don neon and Rollerblades, and enter the country of California.

Weird, I know. Best if you don’t think about it too much.

And then when I get there, how do I find this girl?

You will know.

Okay. And how do I get back?

The same way you came, but in reverse.

Like I should move forward but do the order backward or go…

Don’t overthink it.

Oh. Okay.

For you see, if you do not find her and fix things, what’s ugly will become uglier, and what’s weird will become weirder.

And then you’ll look like me.

Ahh! Oh.

Sorry.

I understand. I set myself up for that.

Anyway, I believe in you.

Thank you.

Go. Be careful. I love you.

Bye.

Bye.

[crowd] Bon voyage to reality, and good luck restoring the membrane that separates our world from theirs so you don’t get cellulite!

[cheering]

I guess she’s going without you.

You’re so lost, Ken.

[laughs]

She literally asked me.

And I was like, “I prefer to stay here.”

Why? Are you scared?

No.

[laughs] I bet you’re scared.

And I bet she doesn’t even want you to go.

Well, you bet both those things incorrectly, and I bet in the opposite direction.

Yeah?

Yeah.

Which way is that?

You don’t even know.

I just don’t want to leave. I’m trying to find reasons not to leave.

Please stay.

I’m gonna miss you guys so much.

I just wish someone could come with me, but you can’t.

I should do this alone.

What bird am I thinking of?

Parrot.

Dolphin. I mean, no, a bird.

Pelican.

Ohh.

Man.

We’ll miss you, Barbie.

[Stereotypical Barbie] I’ll be back in no time, with perfect feet, and we’ll forget that this ever happened.

And you’ll get to see all the good work we’ve done to fix the world.

You’ll be such a hero to them.

All those grateful, powerful women who owe their wonderful lives to Barbie.

I’ll bet every woman will say thank you and give you a really big hug. [giggles]

Yes, you’re right. Here I go.

Bye.

Yay!

Bye, Barbie.

Bye.

[whooshes]

[“Closer to Fine” playing]

Bye, Barbie. Good luck in reality.

Watch for cellulite!

[car horn honks]

[singing along]

♪ I went to the doctor I went to the mountains ♪

♪ I looked to the children I drank from the fountains ♪

♪ There’s more than one answer to these questions ♪

♪ Pointing me in a crooked line ♪

♪ And the less I seek my source for some definitive ♪

♪ Closer I am to fine ♪

♪ Closer I am to fi…

♪ Closer I am to fi…

[both screaming]

[tires screeching]

[screaming continues]

[music stops]

[panting] What are you doing here?

I’m coming with you.

No. Please get out.

I can’t.

I made a double bet with Ken, and you can’t make me look uncool in front of Ken.

Ken’s not cool!

He is to me.

You’re just gonna slow me down.

Barbie, what if there’s beach?

You’ll need someone who’s a professional in that.

Did you bring your Rollerblades?

I literally go nowhere without them.

Please?

Okay.

Wow. [chuckling]

Let’s do this.

Can I sit in the front?

No.

[narrator] And so Barbie and Ken set off on their adventure to the Real World.

[eagle screeches]

[“Journey To The Real World” playing]

♪ Somewhere else there is to see ♪

♪ The future is a mystery ♪

♪ I wonder what we’ll see when we ♪

[dolphins clicking]

[seagull squawks]

[Ken] Ah!

♪ Get to ♪

[Ken grunting]

♪ The Real World ♪

[bicycle bell rings]

[chuckles]

[Ken exhales]

Hi!

[both chuckle]

♪ We’re going to ♪

♪ The Real World ♪

Barbie…

Wow. [laughs]

Yes!

[“Watati” playing]

[Barbie] Wow. This is the Real World.

Barbie, I told you there’d be beach.

Yeah.

[onlookers whistle]

[laughing]

Hmm.

Oh, yeah! [laughs]

[chuckles]

[man wolf whistles]

What’s going on?

Give us a smile, blondie.

Why are these men looking at me?

Yeah, they’re also staring at me.

Ooh, love that!

Wow!

I feel kind of ill at ease. Like… I don’t know the word for it, but I’m…

[man 1] Nice leotard.

Conscious, but it’s myself that I’m conscious of.

[Ken] I’m not getting any of that.

I feel what could only be described as admired.

[man 2] Damn, girl!

But not ogled.

[man 3] You’re hot.

And there’s no undertone of violence.

Mine very much has an undertone of violence.

Oh, look, a construction site.

We need that good feminine energy.

Yeah.

Ladies! Yoo-hoo.

Oh.

You got fries with that shake?

If I said you had a hot body, would you hold it against me?

[man 4] Have I died and gone to heaven?

[man 5] Is that a mirror in your pocket?

Baby, you are an angel.

I can see myself in your shorts.

I don’t know exactly what you meant with all of those little quips, but I’m picking up on some sort of entendre, which appears to be double, and I would just like to inform you,

I do not have a vagina.

And he does not have a penis.

We don’t have genitals.

That’s okay.

Yeah.

Yeah, whatever. Yeah.

It’s cool.

I have all the genitals.

Geez, you would think a construction site at lunch time would be the perfect place for a little woman power, but this one was so… male.

Everything is almost like… reversed here.

[seagulls cawing]

Oh, look!

The Supreme Court.

[Ken] They’re so smart.

Yeah.

[man 6] Yeah, bruh! Do it, bro!

[slap lands]

[“Chose Your Fighter” playing]

[gasps]

[camera shutter clicks]

[camera shutter clicks]

I love me a leotard.

I love the elbow pads.

I think we should get some different clothes.

[waves crashing]

[seagulls cawing]

We look great.

I love fringe.

I love denim.

Ha-ha-ha-ha!

[laughs]

Hey, man.

You guys gotta pay for that stuff.

[cop] She looks even better in more clothes.

Because you can imagine more.

You know what? Keep ’em.

Weird Barbie said I would know how to find this girl, but I have no idea.

Hmm.

What would a smart Barbie do?

I just need to clear my mind so I can think.

Who is playing with me?

I hate it when people think. I get so bored.

Faster I figure it out, the faster we get to go home.

What am I supposed to do?

Ken!

Go for a walk or something.

By myself?

Yes.

Really? Where?

Anywhere.

Can I go that way?

Yes. Okay.

Don’t go far.

Okay!

[exhales]

[man] Excuse me, sir.

Thanks, man.

[“Also Sprach Zarathustra” funk remix playing]

[man] What’s up, man?

We’ve got to man up on this one.

Great workout, man.

[both in unison] Men, men, men.

You’re the man!

No, you’re the man!

[men in unison] Men, men, men!

[exhales]

[engine revs]

[horse neighs]

Based on the ROI, we are exceeding expectations.

Good stuff. So I’m not worried about it.

Excuse me…

Not now, Margaret. Let’s shake on this.

We are gonna make a lot of money.

We are officially important.

[businessmen laugh]

[chuckles softly]

[gunshot]

[shouting]

[grunts]

[men grunt]

[chuckling] Yes!

[soft dreamy music playing]

[inaudible]

[inaudible]

That felt… achy, but good.

[lively chatter]

[dog barking]

[man] I’m actually trying to make this work.

[sniffles]

[woman] How? By calling me a lunatic?

That’s not how you make things work.

I don’t know what this is all…

[children laughing]

[breeze blowing]

[birds chirping]

[leaves rustling]

[men conversing indistinctly]

[both chuckling]

[chuckles]

You’re so beautiful.

I know it.

[chuckles]

Barbie! Barbie!

Yes!

[both] I’ve got it!

Oh, what do you got?

You go first.

No, no, you go.

We’ll go at the same time.

Okay.

She’s at school.

Men rule the world!

What was that?

The kid’s at the school?

But what did you say?

Nothing.

Okay.

Well, let’s go to the school.

Okay!

Now, come on.

[phone rings]

Hello.

This is Dan of the FBI.

Oh. This is Aaron at Mattel.

I don’t give a flying squirrel who you are, Aaron.

What are you, like an intern?

No, I’m…

Two of your dolls have gotten loose.

Impossible.

How do you know?

Don’t sass me, Aaron.

Couple of blondes, answering to Barbie and Ken.

Rollerblading in Santa Monica.

We’re gonna need Mattel’s help landing the eagle.

Don’t crap the bed, Aaron!

I won’t.

[line disconnects]

This is bad. This is really bad.

What?

[stammering] This happened before.

What? When?

I heard about ten years ago, a woman named Skipper turned up at some family’s home in Key West.

Asked to babysit the kids.

She then tried to take their toddler surfing.

Geez.

I know.

They were able to straighten it out, keep it under wraps, but this is serious.

I’m going all the way up.

No one goes all the way up.

I have to.

You may never come back.

I know.

[humming]

♪ Closer I am to fine

[humming] Oh.

Hey.

Oh, hi, Aaron.

New drawings?

Yeah.

I just started drawing these weird designs.

[Aaron] These are different.

It’s Irrepressible Thoughts of Death Barbie.

Full Body Cellulite Barbie.

Crippling Shame Barbie.

Okay. Listen, I have to speak to the top brass.

No.

I must.

No.

I’m going to.

Aaron, they’re in a big corporate idea sesh. No one is to be admitted.

Aaron! Aaron! Aaron, stop!

Always be empowering girls.

Always!

But what do we really sell? I’ll tell you what.

We sell dreams.

[Sasha’s mom whispering] Aaron.

And imagination!

And sparkle!

I get excited. I’m passionate.

And when you think of sparkle, what do you think of after that?

Female agency.

Excuse me.

Who are you?

Aaron Dinkins, sir.

We’re in the middle of a major sit-down here, Aaron Dinkins.

I think you’re gonna want to hear this, sir.

Can you just e-mail it? And you can send it to me EOD.

[whispering] End of day.

[chuckles] That’s cool.

Yeah.

[stammers] May I put it in a whisper, sir?

Fine. Whisper me.

[whispers]

[drumsticks tapping]

[all whispering]

[chuckles]

[whispering]

No. No!

Ahh! Ahh! No.

[man 1] Get the chair!

[man 2] Take the cart.

[man 3] They’re okay.

You all right?

He’s okay.

Okay.

He’s okay.

[exhales]

It’s a repeat of Skipper in Key West.

And with all due respect, that was Skipper, sir.

This is… Barbie.

[sighs] If this got out that our dolls were coming to Los Angeles from Barbie Land as life-size versions of themselves… [panting] roaming the earth… this would be very bad.

Barbie in the Real World?

That’s impossible.

We’ve got a definite situation on our hands.

Catastrophic!

I can’t stress that enough!

What?

What’s your name again?

Aaron Dinkins, sir.

Aaron Dickinson?

Dinkins.

Yes! Aaron.

Is Barbie Land like an alternate reality or is it like a place where your imagination…

[all] Yes!

Okay.

Think of it as a town in Sweden, Aaron Dinkins.

[all] Sweden.

Right.

[sighs]

How much do you weigh?

It doesn’t matter. [clears throat]

Sounds like a job for the box.

No one rests until this doll is back in a box.

[school bell rings]

[Barbie] Look, Davy Crockett Junior High School, just like I saw in my vision.

[Ken] A man on a horse.

I’ve started to get all these weirdo feelings.

Like, I have fear with no specific object.

What is that?

It’s anxiety.

I have it too. They’re just awful at this age.

I feel amazing. [chuckles]

That’s because kids don’t take it out on the dads.

[Barbie] She’s gotta be here somewhere.

I need to find her soon.

I’m just gonna pop into the library and see if I can find any books on trucks. [chuckles]

Okay, just don’t get in trouble.

I won’t!

[“Angel” playing]

♪ Johnny, my baby, did it always have to end this way? ♪

♪ ‘Cause one day ♪

♪ One day, my baby just went away ♪

[inaudible conversation]

[gasps]

♪ My angel ♪

What are you doing?

Oh, uh, what’s that girl’s name?

[girl] That’s Sasha.

Hey, Sasha!

Don’t talk to her.

Oh.

Sasha can talk to you, but you can never talk to Sasha.

She’ll crush you.

Don’t worry.

Everyone really likes me and thinks I’m cool and pretty.

Huh.

Thank you.

Hey, ladies. Sasha, what’s up?

[exclaims]

Who are you?

[laughs]

I’m only your favorite woman of all time.

Barbie!

[laughs]

You really think you’re Barbie?

Yeah.

She’s crazy.

Do you think she escaped from like an insane asylum?

So you’re like “Barbie” Barbie? Like a professional bimbo?

No. Barbie’s not a bimbo.

Barbie is a doctor and a lawyer and a senator and a Nobel Prize winner.

You’re a Nobel Prize winner?

Oh. No, not me, but Barbie is.

Yeah.

Aren’t you guys gonna thank me and give me a big hug? [laughs]

For being your favorite toy?

We haven’t played with Barbie since we were like five years old.

Yeah, I hated dolls with hair.

I mean, I’d play with Barbie, but it was, like, the last resort.

I loved Barbie.

[clears throat]

Oh.

Anyways, even then, it was horrible for us.

It was horrible?

Why?

Come on, Sasha.

Give it to her.

Destroy Barbie.

[sighs]

Okay, Barbie, let’s do this.

You’ve been making women feel bad about themselves since you were invented.

I think you have that the wrong way around.

You represent everything wrong with our culture.

Sexualized capitalism, unrealistic physical ideals…

No, no, no. You’re describing something stereotypical.

Barbie is so much more than that.

Look at yourself.

Well, I am technically Stereotypical Barbie.

You set the feminist movement back 50 years.

You destroy girls’ innate sense of worth and you are killing the planet with your glorification of rampant consumerism.

No, I’m supposed to help you and make you happy and powerful.

Oh, I am powerful.

And until you showed up here and declared yourself Barbie, I hadn’t thought about you in years, you fascist!

Oh. Um…

Okay.

It’s happening again. [laughing] I have to…

Will you excuse me?

It was really nice talking to you.

They never listen.

Excuse me, sir, do you have the time?

You respect me.

Sorry, no, do you know what time it is?

No, I do not.

[laughs]

Okay.

Why didn’t Barbie tell me about patriarchy, which, to my understanding, is where men and horses run everything?

Sure.

I shall seek my fortune there.

All right. So… I’ll take a high-level, high-paying job with influence, please.

Okay, you’ll need at least an MBA.

And a lot of our people have PhDs.

Isn’t being a man enough?

Actually, right now, it’s kind of the opposite.

You guys are clearly not doing patriarchy very well.

[laughing] No! No. We’re, uh…

We’re doing it well, yeah. We just… hide it better now.

Oh.

No, I won’t let you do just one appendectomy.

But I’m a man.

But not a doctor.

Please?

No.

Can I talk to a doctor?

You are talking to a doctor.

Can you get me a coffee?

No.

And I need a clicky pen.

No.

And a white coat.

No.

And a sharp thing.

No.

There he is. Doctor!

Somebody get security.

I’d like to apply for your job of beach.

So, you want to be a lifeguard?

Oh. I’m not trained to go over there.

I’m trained to stand confidently right here.

There’s nobody in danger here.

And even if there were, I’m not trained to save them.

[chuckles]

Then I can’t hire you.

I can’t even beach here!

[sobbing]

She thinks I’m a fascist?

I don’t control the railways or the flow of commerce.

[sobs]

There you are.

Oh, no.

That went terrible.

I need to find somewhere where I can start patriarchy fresh.

Miss Barbie?

[sniffling] It’s just Barbie.

We’re gonna need you to come with us.

Oh.

Who are you?

We’re Mattel.

Mattel?

Mattel.

Oh, thank goodness!

I’ve gotta talk to somebody in charge.

Everything is backwards here.

Men look at me like I’m an object.

Girls hate me.

Everyone thinks I’m crazy, and I keep getting arrested.

Need you to step this way, ma’am.

I also just learned to cry.

First, I got one tear and then I got a whole bunch.

What do I do? Do I follow Barbie into that scary unmarked black truck car?

A truck car I’d like to have, actually.

You’re right, she’s fine. It’s Mattel.

[chuckles] Yeah.

I know.

I’ll go back to Barbie Land, and I’ll tell the Kens what I’ve learned.

Oh, it’s going to be beautiful!

[chuckles]

Okay.

Back to Barbie Land.

Let’s go that way.

Hi, Bunny Boo-Boo.

Don’t call me that.

Sorry. I’m off early because of a crisis at work, but I thought we could go get some soft serve.

Thank God they arrested that nutjob.

Um, um… that reality-challenged woman.

She thinks she’s Barbie.

Wait, what did you say?

She thinks she’s Barbie. She’s, like, fully convinced.

[gasps]

What are you doing? What are you doing?

Mom. Mom!

Mom, get back in the car!

Are you kidding me?

Mom!

Mattel! Of course it was you guys that brought me here.

Because it definitely wasn’t that Sasha girl.

Thanks for the ride. This has been so much fun.

[gasps] Wow, the mothership!

[door hisses]

[gasping]

Barbie!

We’re so happy to see you.

Hi!

[man] Would you like some mineral water?

Yes, thank you.

Oh, thanks.

I’m not used to that having anything in it.

[men laughing]

[Barbie] Thank you.

So, we’ve been very anxious to get some quality face-time with you.

Of course. So what can I do to repair the rift in the space-time continuum, get my feet back, and that one cellulite gone, and just generally not turn into Weird Barbie?

We have been discussing that very topic.

If you’re agreeable to it, we would love it if you could just get into that giant box.

Get into the box and you’ll go back to Barbie Land.

And everything will be as it was.

You know what? We should probably get Ken first.

Ken?

[confused chatter]

Ken.

You know, Ken. Barbie and Ken.

[chuckles] Oh!

Yes, Ken. Yeah.

Ken. The guy. Yeah.

[panting]

Back to Barbie Land! [laughs]

I’m gonna be sick. I’m gonna be sick. [retches]

Ken isn’t something we’re worried about.

Ever.

Okay, I’ll just, um… I’ll get in the box then.

All right! Yes!

[applauding]

Oh. But since I came all this way, could I just meet the woman in charge, your CEO?

Oh, that would be me.

Oh. Your CFO.

Me.

Your COO.

Here.

President of the Barbie division.

Present.

I’m a man with no power.

Does that make me a woman?

Are any women in charge?

Listen, I know exactly where you’re going with this, and I have to say I really resent it.

We are a company literally made of women.

We had a woman CEO in the ’90s.

And there was another one… at some other time.

So that’s… That’s two right there.

Women are the freaking foundation of this very long phallic building.

We have gender-neutral bathrooms up the wazoo.

Every single one of these men love women.

I’m the son of a mother.

I’m the mother of a son.

I’m… I’m the nephew of a woman aunt.

Some of my best friends are Jewish.

What I’m trying to say is…

Get in the box, you Jezebel!

[men exclaiming]

What? I can’t say Jezebel now?

I haven’t been in a box in ages.

See? It’s easy.

Oh, okay.

Huh.

Oh, my gosh. I remember this smell. [gasps]

I’m having a real Proustian flashback.

Remember Proust Barbie? That did not sell very well. [chuckles]

[twist ties creaking]

Oh! Ha-ha!

You know what? Um, before I get in the box, could I just run to the restroom and make sure my hair is perfect?

Fine. Can you be speedy about it?

Mmm-hmm.

[door whirring]

Down this way?

It’s just down the hallway.

Thank you.

[Mattel CEO] On the right.

[“Speed Drive” playing]

[elevator dings]

[Mattel CEO] I guess she really had to go to the bathroom.

[alarm blaring]

♪ Oh, oh ♪

[Mattel CEO] Get that Barbie!

♪ She my best friend in the whole world ♪

♪ I’m the mood board… ♪

Don’t you dare push that button. Let me push it.

[button chimes]

[elevator dings]

[alarm continuing]

[panting]

[elevator dings]

[Mattel CEO] I said get that Barbie!

Oh!

[men stomping in unison]

Where’s Barbie?

I’m gaining on you.

[gasping]

I’ll capture you.

♪ Oh, oh, Barbie You’re so fine ♪

[both scream]

♪ You’re so fine You blow my mind ♪

♪ Jump into the driver’s seat and put it into speed drive ♪

Barbie!

It’s quicker to go over the cubicles.

It’s quicker!

Sure.

♪ We’re running through the red lights ♪

♪ Oh, Barbie, you’re so fine ♪

Ahh!

[thuds]

♪ Jump into the driver seat… ♪

[Mattel CEO] Get that Barbie!

[man] Barbie!

[man] Barbie!

[Mattel CEO] Damn it, Barbie!

Barbie!

[Mattel CEO] I’m gonna get you! Barbie!

[exclaims]

[banging on door]

♪ Red light, red lights Red lights, red lights, yeah ♪

[gasping]

♪ Oh, got the top down Tires on fire ♪

Oh! [gasping]

[door thud echoing]

[romantic orchestral music playing on speakers]

Don’t worry. You’re safe here.

[birds chirping]

What is this place?

[chuckles] I always find I think best at kitchen tables.

Tea?

[Barbie] Uh, yes, please.

So a woman does work here.

Oh, sweetie, we do more than work here.

Thank you.

[slurping]

What?

It’s because I don’t know how to drink tea? [chuckles]

No. You look different.

Oh. It’s not how I normally look. I usually look perfect.

Oh, I don’t know.

I think you’re just right.

[chuckles]

Real World isn’t what I thought it was.

It never is.

And isn’t that marvelous?

Who are you?

[Mattel CEO] Which way did she go? Who saw her last?

Uh, if you go through that closet, you’ll find a stairwell down to the lobby.

[Mattel CEO] Find her!

Okay.

Thank you, um…

Ruth.

Ruth. Thank you, Ruth.

You’re welcome, Barbie.

[“Speed Drive” resumes playing]

♪ Oh, oh ♪

[alarm blaring]

♪ Oh, oh ♪

♪ She my best friend in the whole world ♪

♪ I’m the mood board She’s the inspo ♪

♪ And she’s dressed in really cute clothes ♪

[elevator door dings]

[man 1] Oh, we got her! There she is!

[sighs]

Oh! Uh, key card!

Wait.

I don’t have my key card.

[tires screech]

Get in!

[breathing heavily]

[wind blowing]

Now! Get in now!

[car door opens]

[Sasha’s mom] Come on.

Oh!

Ahh!

[Sasha’s mom grunts]

Okay.

[system beeps]

Oh, no! Now we’re never gonna get Barbie!

[system chimes]

Oh, we didn’t need it!

Barbie!

[engine revving]

Let’s form a plan here.

I would normally have shotgun. I’ll go in the first one.

[Sasha’s mom] Hang on.

[tires screeching]

Ahh!

God, I hope nobody from school saw us put a life-size Barbie in our car.

[Sasha] How did this even happen?

[Sasha’s mom] I don’t know.

How are you here? You’re like an idea.

A great idea.

So, I’ve been a little lonely lately.

And I found those Barbies we used to play with…

I thought we gave those away.

Well, I started playing with them.

And making drawings like we used to do. Remember?

Because I thought it would be joyful.

Was it?

No, it wasn’t.

I got sad and weird, and then the drawings got sad and weird, and maybe because I couldn’t be like you, I ended up making you like me.

Did any of these drawings by chance have thoughts of death and cellulite?

Yes! Irrepressible Thoughts of Death Barbie.

Oh, my God!

And Cellulite!

[both gasping]

I came for you!

You came for me!

Those were your memories.

[soft dreamy music playing]

[inaudible]

[Sasha’s voice echoes] Hello? Hello? Hello?

Hello? Are you two, like, shining?

No! No, it’s nothing like that.

Are you shining with a real Barbie?

No!

I mean, maybe. Like a little, yes.

[sighs] I don’t even know where to start with this wishing-a-Barbie-to-life crap.

Oh, Sasha, listen.

I’m just a boring mom with a boring job and a daughter who hates me.

Can you blame me for wanting to have a little fun?

[engines revving]

I gotta lose these chuckleheads.

[chimes]

[engine revving]

[Barbie] Ahh!

[Sasha] Mom!

[upbeat rock music playing]

I think I owe you ladies an apology.

I thought that Barbie had made the Real World better, but the Real World is forever and irrevocably messed up!

Well, the Real World is not perfect, but you inspired me.

I love women. I want to help women.

Oh, come off it, everybody hates women.

Women hate women, and men hate women.

It’s the one thing we can all agree on.

Is that true?

It’s complicated.

Hate is a strong word.

Wake up, Mom!

[brakes screech]

I am wide awake, Sasha!

[gasps]

Mom, where did you learn to drive like this?

There was this guy.

Was it Dad?

Yeah, yeah, it was… It was Dad.

[engines revving]

[tires screech]

[Sasha’s mom whispers] Okay, duck.

[whispering] You look so pretty.

Don’t look at me.

Okay, sorry.

[gasps]

[sighs]

I can’t hold them off forever. Where can we go?

[gasps] Wait, I have an idea. Can you get us to Venice Beach?

Sure can.

Ah! I love Rollerblades. Where are we going?

Barbie Land.

[Sasha] What? Mom!

Are you really gonna let Barbie take you and your tween daughter to an imaginary land?

Yes, and you wanna know why? Because I never get to do anything.

I didn’t even go on that cruise I won at your school raffle because I didn’t have enough vacation days and your dad’s allergic to sun.

Oh.

What about Dad? We can’t just leave him!

He’ll be fine.

Bolígrafos.

[voice on app] Bolígrafos.

Bolígrafos.

[correct answer chimes]

Yeah, yeah. He’ll be fine.

Ready for fun?

Yes!

Great!

Here we go!

Come on and feel the magic.

[“Journey To The Real World” instrumental playing]

[Sasha’s mom gasps] Where are we?

How did we get into these clothes?

How did we get into this vehicle?

When I was a kid, I lost these boots and my mom wouldn’t let me buy a whole new Barbie just to replace the boots.

They look so good on you.

Why, thank you.

Hey, you!

She was always my favorite Barbie.

You’re my favorite human.

Don’t tell him, but I never got a Ken.

That’s because Ken is totally superfluous.

[Sasha’s mom laughing]

[gasps] I didn’t say that.

Women hold all major positions of power, control all the money.

Basically, everything that men do in your world, women do in ours.

[Sasha’s mom gasps]

I mean, that sounds kind of cool.

Sasha, look, dolphins!

[all chuckling]

[“Closer to Fine” playing]

♪ Closer I am to fine ♪

♪ Yeah ♪

♪ Closer I am to fine ♪

[yells] What is this song?

Oh, and we have a female president and it’s fun and work and friendship and female 24/7.

[Sasha] Do giant hands come in and play with you?

[Barbie] No, that’s crazy.

Excuse me. Have you seen a group of women on wheels?

Actually, yeah, there was a blonde, a brunette and a tween.

They Rollerbladed in that direction.

Oh, no.

First step is always Rollerblading.

[Aaron] Excuse me, sir?

They’ve gone to Barbie Land.

Oh, no.

And she’s brought humans there with her.

This could mean extremely weird things for our world.

Like what?

Nothing any of our collective imaginations could ever dream up.

A podcast hosted by two wise trees.

Or a choir of 2,000 young fathers.

Not even close. We’ve got to get to Barbie Land.

Go! Find some blades now! Just pick a direction and run!

I can practically feel my heels lifting already. Yes!

This is what I was supposed to do. Bring you back here.

It feels right.

It does.

Okay, this is…

Oh. That’s strange.

[cheerleaders cheering]

[shouting and cheering]

[“Man I Am” playing]

♪ ‘Cause that’s the man I am ♪

♪ Baby, treat me right ♪

Incoming brewski beer. [mimics airplane]

So, that’s our president, with the beer.

And the cheering squad is the Supreme Court.

This is so much better than being president.

Something’s weird today.

[water bubbling]

Hi, Barbie!

Oh, okay. Hi, Ken.

Have a brewski beer. My big guy is thirsty.

Ah.

Anyway, uh…

Wait until you see my Dreamhouse.

Everything I’ve bought and own will totally inspire you.

And we can change clothes again!

That’s the Capitol.

[Sasha’s mom] Ah!

It’s pink?

Pink!

And that’s the…

[horse neighing]

[Sam Smith] ♪ You think That women rule the world ♪

[Barbie] These are the Dreamhouses. This is where I live.

[Sasha’s mom] You can see through the houses.

So does each Barbie, like, have their own house?

Mmm-hmm.

That’s cool.

Where do the Kens stay?

I don’t know.

At first I thought the Real World was run by men.

And then there was a minute where I thought it was run by horses.

But then I realized that horses are just men extenders.

[Kens] Oh!

[Pompadour Ken] Hmm?

Oh. I had that treehouse.

I saved up my allowance to buy it.

[Barbie] I’ve never seen a car like that before. What happened here?

Everything, basically everything exists to expand and elevate the presence of men.

That’s amazing.

That’s beautiful.

I know.

[other Ken 1] Barbie’s here.

[other Ken 2] Uh-oh.

Ken?

[laughs nervously]

What have you done?

What are you wearing?

Don’t question it. Just roll with it, tiny baby.

[other Ken] Tiny baby.

Don’t call me baby.

What about mini-baby? Like this mini-fridge.

[Kens laugh]

No, Ken.

This is my Dreamhouse. It is my Dreamhouse! It’s mine!

No, this is no longer Barbie’s Dreamhouse.

This shall henceforth be known as Ken’s Mojo Dojo Casa House.

You don’t have to say dojo and house.

And casa…

But you do because it feels good. Try it.

[both] Mojo Dojo Casa…

No, girls. Don’t say it.

Mojo Dojo Casa House.

[laughs]

[Mattel CEO] Give it to me straight. How weird is it?

Whoa, boss, these Mojo Dojo Casa Houses are literally flying off the shelves.

The kids are clamoring for them. Ken is on T-shirts, mugs.

It’s the number one tattoo.

[Mattel CEO] Oh, no.

Warner Bros. have started auditions for the Ken movie, which is already a blockbuster hit. [laughs]

It’s happening. That thing we could never imagine.

If we don’t get my words lady…

Executive Assistant.

My Executive Words Lady and someone who’s probably her daughter back here and close the portal, our worlds could be altered forever.

Well, what does it matter if it’s Barbie or Ken?

The money is pouring in.

Shame on you, Executive Number Two.

You think I spent my entire life in boardrooms because of a bottom line?

No! I got into this business because of little girls and their dreams.

In the least creepy way possible.

Now, blade faster. Time is running out.

Look, I’m just having some brewski beers at my Mojo Dojo Casa House.

[all gasp]

Ken!

You can stay if you want,

as my bride wife,

or my long-term-lowcommitment-distance girlfriend.

What do you say?

Ugh.

Brewski beer me?

I will not brewski beer you.

Ha-ha-ha. That’s fine.

You know, now that you Barbies aren’t around to run everything, we can do our hair however we like.

I have hats.

Where are my hungry boys? Who wants snacks?

Barbie, I am so happy to see you.

Can you believe what is happening?

I know. Isn’t it great?

Anyone need a brewski beer?

What are you doing? You’re a doctor.

I like being a helpful decoration.

And Allan likes to help me give all the Kens foot massages.

No, I don’t, I don’t like that.

[both] We love it.

Ugh, so gross.

I’m so blotto-faced day-drunk right now.

[laughs]

Ditto same-same that.

[Brunette Barbie 2] I like not having to make any decisions.

It’s like a spa day for my brain. Forever.

What is wrong with them?

We just explained to them the immaculate, impeccable seamless garment of logic that is patriarchy, and they crumbled.

Oh, my God. This is like in the 1500s with the indigenous people and smallpox.

They had no defenses against it.

Yeah. Buckle up, babe. [chuckles]

Because Barbie Land is now Ken Land.

And it’s gonna be just like Century City in Los Angeles, because they had it all figured out in Century City.

The minute you get out of your car, you’re like, “I can’t believe how great this place is!”

No, no, no. They don’t have it figured out in Century City because we failed them.

[loudly] No! You failed me!

[sighs]

[melancholy music playing]

[breath trembles]

Out there, I was somebody.

And when I walked down the street… people respected me just for who I am.

[scoffs] One lady, she even asked me for the time.

No way!

Way. [chuckles]

And if it weren’t for these technicalities like MBAs, medical degrees, and I don’t know, swim lessons, I could have ruled that world.

But I don’t need any of those things here.

[chuckles lightly]

[car bonnet squeaking]

Here, I’m just a dude. And you know what?

That’s enough.

TV remote.

Which one is it?

Oh, it’s that one right there.

[Reporter Barbie laughs]

[TV Ken] Call me Mister Ken President Prime Minister, ma’am.

Let’s recap all the amazing changes and innovations thanks to the Kens.

The Nobel Prize in horses goes to…

[audience Ken] Ken!

[applause]

[audience chanting] Ken! Ken! Ken! Ken! Ken!

[gasps]

[Reporter Barbie] Wow. And now you’re making it permanent with a special election to change the Constitution.

That’s right. In just 48 hours, all the Kens will head to the polls and vote to change the Constitution to a government for the Kens, of the Kens, and by the Kens!

[cymbals crash]

[upbeat music playing on keyboard]

You can’t do this.

This is Barbie Land.

The Barbies worked hard and they dreamed hard to make it everything that it is. You…

You can’t just undo it in a day.

Literally and figuratively, watch me.

Now, if you’ll excuse me… this is my Mojo Dojo Casa House, it’s not Barbie’s Mojo Dojo Casa House.

Right?

[gasps]

[somber music playing]

How’s that feel?

It is not fun, is it?

[Barbies and Kens] It’s boys’ night!

[all cheering]

Every night is boys’ night.

[Kens chanting] Go, Ken! Go, Ken! Go, Ken!

[Kens cheering]

[crying]

Barbie! Take your lady fashions with you.

Take your Celebrate Disco Bell Bottoms…

[ding]

[Barbie] Oh!

[Ken] …and your Ice Capades Pretty Practice Suit and Dazzling Show Skirt.

[gasps]

These are archival.

Your Pajama Jam in Amsterdam sets.

[Barbie] No!

And your Pretty Paisley Palazzo Pants!

Not the Palazzos!

And get out!

[crying]

[Sasha’s mom] Maybe this could fit me.

Honey.

Why did you wish me to your messed-up world using your complicated human thoughts and feelings?

What?

Barbie Land was perfect before.

I was perfect before.

I’m so sorry. I wasn’t trying to do anything.

[objects clattering]

Don’t apologize.

Don’t blame my mom.

[Sasha’s mom] Aw, Sasha, that’s sweet.

Maybe you wished us. Maybe it’s your fault, Barbie.

[Barbie] No, I didn’t wish anything.

I’ve never wanted anything to change.

Oh, honey, that’s life. It’s all change.

That’s… That’s terrifying.

[somber music playing]

I don’t want that.

[music swelling]

Not my life. No, thank you.

Just, no, I don’t want this.

[sighs]

I’m just gonna sit here and wait and hope that one of the more leadership-oriented Barbies just snaps out of it and does something about this whole mess.

I really understand this feeling.

It’s basically, like, being a human person all the time…

Please just leave me here. Just leave me.

Go back to your messed-up world and just leave me to mine.

So, you’re just gonna give up?

[Barbie] Yes.

[body squeaking]

Okay.

[Sasha] You know, I almost feel bad for you, but you are exactly what I thought you were.

Um…

Let’s go, honey. Let’s just…

Okay, how do we… How do you expect…

Do everything we did in reverse.

Unbelievable. Come on, Mom. She doesn’t deserve you.

[sighs]

This is the lowest I’ve ever been.

Emotionally and physically.

[cheerful music playing]

[girl] Okay, kids, it’s time to run out and get the new Depression Barbie.

She wears sweatpants all day and night.

She spent seven hours today on Instagram, looking at her estranged best friend’s engagement photos, while eating a family-size bag of Starbursts.

And now her jaw is killing her.

And she’s going to watch the BBC’s Pride and Prejudice for the seventh time until she falls asleep.

Situation of our families is such that any alliance between us must be regarded as a highly reprehensible connection.

[girl] Anxiety, panic attacks, and OCD sold separately.

[Weird Barbie] Barbie. Barbie, wake up.

Hey.

[female voice] Weird.

I’m like you now.

Ugly and unwanted.

Thanks.

Let’s get her in the back. Come on.

One, two…

[tandem bike bell rings]

Isn’t this great?

[executives] Yes.

Wait until you see the boat.

[executives] The boat.

[laughter]

[tandem bike bell rings]

[Mattel CEO] Beautiful countryside.

[“Closer To Fine” playing]

[singing along] ♪ He said He could see through me ♪

♪ I spent four years prostrate To the higher mind ♪

♪ Got my paper and I was free ♪

[both] ♪ I went to the doctor, I went to the mountains ♪

♪ I looked to the children ♪

♪ I drank from the fountains ♪

[record scratches]

[Radio DJ Ken] We interrupt this broadcast to bring you our new radio station only playing Ken’s favorite song.

[“Push” by Matchbox Twenty playing]

♪ I want to push you around ♪

♪ Well, I will, well, I will ♪

Turn this song off, for Christ’s sake!

[all screaming]

[tires screeching]

[song distorting]

Who are you?

I’m Allan.

Oh, you are Allan. That’s great.

Don’t tell the Kens. I’m trying to escape.

I cannot sit on one more leather couch.

It’s gonna break my spirit.

As soon as they figure out how to build that wall sideways and not just up, no one is gonna be able to get in or out.

So if we want to leave, we better make a run for it.

No, Allan. You can’t go. Having a Barbie in the Real World is what caused all these problems in the first place.

Not one person would care if Allan was in the Real World.

In fact, it’s happened before. All of ♪NSYNC, Allan.

Yes, even him, so come on!

[Worker Ken] Hey, you there.

What do we do?

Just get in the car and keep it singing.

Hey, man.

What?

Be ready for anything.

[Worker Ken] Who are you?

I’m Allan. I’m, uh, I’m Ken’s buddy.

Yeah, all of his clothes fit me.

[all grunting]

[gasps] Get in the car!

[Allan] You want a piece?

Wait, you don’t have a driver’s license.

This car doesn’t have an engine.

[groans] Fine.

[upbeat music playing]

What are you doing? We gotta go.

We have to go back. Barbie Land needs saving.

Barbie needs saving.

What? You hate Barbie!

But you don’t. You’ve always believed in what she could be.

Yeah, well, I was wrong. Barbie gave up. The Kens won.

You have to try.

Even if… Even if you can’t make it perfect, you can make it better.

I can’t make anything better.

I’m the one who ruined Barbie Land with my stupid drawings in the first place.

They’re not stupid! They’re amazing!

You like my drawings?

They’re weird and dark and crazy.

Everything you pretend not to be.

I am, I am. I’m weird and I’m dark and I’m crazy.

[groaning]

Easy. Easy.

Okay. You want some more Allan?

[Kens gasp]

We have to get out of here right now.

Shut up, Allan! We’re going back.

Let’s go get my doll.

[snapping fingers]

[both sigh]

I’ll never get out of here.

[Sasha] Where do we find Barbie?

[Allan] There’s only one place she’d be.

[Blonde Barbie] You’re a writer.

This is your Nobel Prize.

Remember winning it?

Huh.

It’s useless trying to deprogram her.

I already did everything I could.

Oh, my God. I don’t even know how I got here.

I don’t deserve this.

Um, I’d like to thank Ken.

-[Weird Barbie gags] -[Writer Barbie] Thank you, Ken.

I love you, Ken.

The fork in my soup is this, Barb.

Why didn’t the brainwashing work on you?

[Barbie] My exposure to the Real World must have made me immune.

Either you’re brainwashed, or you’re weird and ugly.

There is no in between.

Sing it, sister.

Well, get ready, kids.

Because in 48 hours, Barbie Land becomes Ken Land.

[door opens]

[Allan] Come on, gang.

We’ll find Barbie at the top of these stairs.

The Kens. They’ve found us.

[all clamoring]

[body squeaking]

[Writer Barbie] Ken!

No! Get back.

[Writer Barbie] Ken. Oh. Oh!

[shushing]

[Sasha’s mom] Hello?

Hmm?

Humans. We’re fine.

[Barbies] Ah.

And Allan.

[Barbies] Hmm.

Come into my Weirdhouse. Hi! I’m Weird Barbie.

I’m in the splits, I have a funky haircut, and I smell like basement.

Oh, my God. I had a Weird Barbie.

Yeah, you did.

You make them weird by playing too hard.

That’s cool.

[gasps] That’s Sugar Daddy Ken. And Earring Magic Ken.

Mattel discontinued them.

Sugar Daddy?

No, no, no.

I’m not a sugar daddy.

This is Sugar, and I’m her daddy.

And I have an earring. A magic earring.

These were actual Kens.

[gasps] More discontinued Barbies.

Growing Up Skipper? May I?

Okay.

[Sasha’s mom] Watch this.

[air hisses]

Her boobs grow.

Why would they do that?

[Sasha’s mom] And Barbie Video Girl.

I have a TV in my back. You know whose dream that is?

Nobody. Nobody’s dream.

And that’s Barbie Barbie, of course.

She’s not dead. She’s just having an existential crisis.

[Sasha’s mom] Okay, come on.

Hey.

What’s wrong?

[crying] I’m not pretty anymore.

What? You’re so pretty.

I’m not Stereotypical Barbie pretty.

[narrator] Note to the filmmakers.

Margot Robbie is the wrong person to cast if you want to make this point.

But you’re beautiful.

It’s not just that. I’m not… smart enough to be interesting.

You’re so smart.

I can’t do brain surgery, I’ve never flown a plane.

[Sasha’s mom scoffs]

I’m not the president.

No one on the Supreme Court is me.

I’m not good enough for anything.

[crying softly]

It is literally impossible to be a woman.

You are so beautiful and so smart, and it kills me that you don’t think you’re good enough.

Like we have to always be extraordinary.

But somehow, we’re always doing it wrong.

[sighs]

You have to be thin but not too thin, and you can never say you want to be thin.

You have to say you want to be healthy, but also you have to be thin.

You have to have money, but you can’t ask for money because that’s crass.

[sighs]

You have to be a boss but you can’t be mean.

You have to lead, but you can’t squash other people’s ideas.

You’re supposed to love being a mother, but don’t talk about your kids all the damn time.

You have to be a career woman but also always be looking out for other people.

You have to answer for men’s bad behavior, which is insane, but if you point that out, you’re accused of complaining.

You’re supposed to stay pretty for men but not so pretty that you tempt them too much or that you threaten other women because you’re supposed to be a part of the sisterhood but always stand out.

And always be grateful.

But never forget that the system is rigged, so find a way to acknowledge that but also always be grateful.

You have to never get old, never be rude, never show off, never be selfish, never fall down, never fail, never show fear, never get out of line.

It’s too hard, it’s too contradictory, and nobody gives you a medal or says thank you.

And it turns out, in fact, that not only are you doing everything wrong but also everything is your fault.

[sighs]

I’m just so tired of watching myself and every single other woman tie herself into knots so that people will like us.

And if all of that is also true for a doll just representing a woman… then I don’t even know.

Wait.

I did write a book.

It’s like I’ve been in a dream, where I was somehow really invested in the Zack Snyder cut of Justice League.

But what you said broke me out of it.

Really?

Yeah.

You’re back. She’s back.

By giving voice to the cognitive dissonance required to be a woman under the patriarchy, you robbed it of its power.

Yes.

Wow, I just said all of that.

Hell, yes, White Savior Barbie!

No, it was your mom. Your mom did the saving.

We have to stop the Kens.

And you need to say all of those things to the other Barbies.

That’s the key.

Got it.

But how are we gonna get the Barbies away from their Kens?

We have experience with a world like this one.

Do you have a map of Barbie Land?

What do you think?

[whirring]

Wow.

[Weird Barbie] Thanks. I built it.

Okay, here’s the deal.

It’s not just about how they see us, it’s about how they see themselves.

Ken Land contains the seeds of its own destruction.

First we have to get the Barbies away from their Kens.

We could use a decoy Barbie who pretends to be brainwashed.

That should be you.

Cool.

[rousing pop music playing]

[Sasha] Distract them by appearing helpless and confused.

Kens cannot resist a damsel in distress.

[Sasha’s mom] You have to make them believe that you’re complacent.

That they have the power.

And when their guard is down, you take the power back.

The influence that Porsche 356 has had on the motoring world as a whole, it can’t be overstated.

Oh! Photoshop is so hard!

I just don’t understand how to use the Select tool.

Honey, you can only use the Select tool if the layer is highlighted.

Let me show you.

My tiny head is just swimming with technical jargon like color bands…

Oh! Hi.

And magnetic lassos and bit maps.

Do you think that you and your strong arms can explain…

Oh! What’s happening?

[Barbie] Allan, go around!

[President Barbie] Ahh!

Oh, but what about Ken?

No, no, no!

No, but I love him!

[Barbie] Come on, Allan!

[President Barbie] Hey! What’s gonna happen to Ken?

[Sasha’s mom] Just listen.

You have to be their mommies but not remind them of their mommy.

Any power you have must be masked under a giggle.

[ding]

What happened?

One minute I was president, and the next I was cutting a Ken steak for him.

Welcome back, Madam President.

Then we’ll recruit the now unbrainwashed Barbies to our cause.

[Barbie] They can be the new decoys.

[Sasha’s mom] You can tell him that you’ve never seen The Godfather.

And that you’d love them to explain it to you.

Ooh, are you guys watching The Godfather?

The Godfather.

I’ve never seen it.

Oh, my God. You’ve never seen The Godfather?

This movie is a rich blend of Coppola‘s aesthetic genius and a triumph for Robert Evans and the architecture of the ’70s studio system.

[President Barbie] Can you start the movie over and just talk through the whole thing?

You have to find a way to reject men’s advances without damaging their egos.

Because if you say yes to them, you’re a tramp, but if you say no to them, you’re a prude.

[dings]

I don’t wanna touch a foot.

No, you don’t.

Another one, be confused about money.

I just have all my money in a savings account.

That’s totally wrong. You need treasury bonds, corporate bonds, CDs.

No one has CDs anymore.

Oh, sweetheart, you are so cute when you’re confused.

But no, not music.

CD stands for Certificate of Deposit.

Stephen Malkmus really harnessed the acerbic talk-singing of Lou Reed with post-punk influences such as Wire and The Fall.

[dings]

What am I wearing? I would never choose this.

Because you’re a physicist. Do you want some pants?

Yeah.

[dinging]

[gasps]

Welcome back, Barbie.

Gee, I am so awkward and don’t feel pretty at all, and will anyone ever like me?

[Sasha] Or distract them with the old standby.

Wearing glasses so they can discover that you’re pretty.

May I?

Sure. Go ahead.

There. Now we can see your beautiful face.

And then there’s pretending to be terrible at every sport ever.

Here, let me show you.

Here, let me show you.

Here, let me show you.

Here, let me show you.

[Kens] Here, let us show you.

We’ll do this until every single Barbie is deprogrammed and ready to take back Barbie Land.

Yes!

Yes!

Yeah!

[whistles]

Hey! Tomorrow the Kens vote to change the Constitution, so we have to get there first.

The final stage of our plan, to turn the Kens against each other.

Now that they think they have power over you, you make them question whether they have enough power over each other.

What if this doesn’t work?

What if he doesn’t… like me anymore?

He likes you.

He was really upset.

Because he likes you.

And because he knows deep down that you don’t like him the same way.

It still doesn’t mean I want to hurt him.

He took your house.

He brainwashed your friends.

He wants to control the government.

True.

[Sasha’s mom] Girl.

Yeah.

Wow.

Yeah.

It’s like I’m a woman already.

[Sasha’s mom] Welcome.

Is this what it’s like?

[groans] It’s time.

I’m ready.

Thank you.

Here I go.

[doorbell rings]

Hi.

[objects shuffling]

[objects clattering]

[Ken] Ahh!

[objects clatter]

Oh, hey. You’ve caught me reading.

Oh.

I’ve been thinking.

Mm-hmm.

[Barbie] Ken Land.

Kendom.

Kendom.

Kendom Land.

Land of the… Land of the free and the men.

Right. Well, this place is…

[Ken] Kendom Land.

Really great.

And the Kens really are just better at ruling than the Barbies ever were.

Well, we just took patriarchy and you know, made a patriarchy.

Yeah, well, I was thinking…

Yes?

I’m ready to be your long-term-distance low-commitment casual girlfriend, if you’ll still have me.

Would you just hold on for one second?

[Barbie] Oh, okay.

[Ken, loudly] Sublime!

I don’t know. I’m gonna have to think about that.

[Barbie] Oh.

Please?

Okay.

Come on in. I’ll play the guitar at you.

Oh, yay!

[breath shudders]

[playing “Push”]

[singing in Rob Thomas’ style] ♪ Said I don’t know if I’ve Ever been good enough ♪

♪ I’m a little bit rusty ♪

♪ And I think My head is cavin’ in ♪

♪ And I don’t know if I’ve Ever been really loved ♪

♪ By a hand That’s touched me ♪

♪ And I feel like Something’s got to give ♪

♪ And I’m a little bit angry, Well ♪

♪ This ain’t over, No, not here, no ♪

♪ Not while I still Need you around ♪

♪ You don’t owe me ♪

♪ We might change, yeah ♪

♪ Yeah, We just might feel good ♪

[Kens] ♪ I wanna push you around ♪

♪ Well, I will, well, I will ♪

♪ I wanna push you down ♪

♪ Well, I will, well, I will ♪

[Sasha’s mom] This is the final stage of our plan.

Give them their dream come true.

And at the peak of their happiness, when they think you actually care about this song…

[singing continues]

You take it all away.

♪ I will ♪

[cell phone chimes]

[Barbie laughs]

Who are you texting?

[Barbie] Huh?

Who are you texting?

No one.

Let me just… [chuckles]

[yells] Ken!

Sorry. One sec.

That’s a beautiful song that you’re playing.

Did you write it?

Yes. You want to sit here and watch me do it, while I stare uncomfortably into your eyes for four and a half minutes?

I would love that.

[Kens] ♪ Baby ♪

Sorry, one sec.

♪ I wanna push you around ♪

Be right back.

♪ Well, I will, well, I will, I wanna push… ♪

[Barbie] You play on their egos and their petty jealousies, and you turn them against each other.

[Brunette Barbie] One sec.

♪ I wanna take you for granted ♪

[ding]

Sorry.

[Barbie] While they’re fighting, we take back Barbie Land.

Does the title of long-term-distance casual low-commitment girlfriend mean nothing?

What do we do?

We beach every individual one of them off.

[Ken] No.

We go to war.

Against the Barbies?

No, against the Kens.

But we are the Kens.

The other Kens.

We should probably call them something else so it doesn’t get confusing.

No, because we’ll know what we mean.

But when we’re on the battlefield and you say “Ken at four o’clock,” how will I know if you mean us Kens or the other Kens?

Because, my dudes, we attack at ten o’clock and take advantage of the morning waves.

But not so early ’cause we’re gonna want to sleep in.

Right.

But what will we fight with? We have no guns.

Tennis rackets and volleyballs.

And slap fights.

And beach offs.

Yes.

Oh, yeah.

[Kens laugh]

[horse neighs distantly]

[somber ballad music playing]

♪ Doesn’t seem to matter what I do ♪

♪ I’m always number two ♪

♪ No one knows how hard I tried ♪

♪ Oh, I, I have feelings that I can’t explain ♪

♪ Driving me insane ♪

♪ All my life been so polite ♪

♪ But I’ll sleep alone tonight ♪

♪ ‘Cause I’m just Ken ♪

♪ Anywhere else I’d be a ten ♪

♪ Is it my destiny to live and die ♪

♪ A life of blonde fragility? ♪

♪ I’m just Ken ♪

♪ Where I see love she sees a friend ♪

♪ What will it take for her ♪

♪ To see the man behind the tan ♪

♪ And fight for me? ♪

[dramatic music playing]

[Kens roar]

[whimpering]

[distorted shouting]

I’ll see you on the Malibu beach!

Charge!

[all yelling]

[upbeat glam rock music playing]

[nipples squeak]

[screams]

[grunting]

[dog toy squeaking]

[chorus singing] ♪ You can’t, Ken, you can’t, Ken ♪

♪ You can’t, Ken ♪

[fast-tempo electric guitar solo playing]

[grunting]

[screams]

[grunts]

[screams]

[Sasha’s mom] And now they destroy themselves.

You know what I think?

I think we should put our freaking Constitution back.

[Writer Barbie] Yes.

[gasps] That’s a great idea.

[upbeat glam rock music plays]

This is a real hornet’s nest in here.

[toy squeaks]

Watch your flank.

[laughs]

[gunshot]

[grunts]

I got shot.

That’s impossible.

Are there real weapons here?

Nope.

♪ I wanna know what it’s like to love ♪

♪ To be the real thing ♪

♪ Is it a crime? ♪

♪ Am I not hot when I’m in my feelings? ♪

♪ And is my moment finally here or am I dreaming? ♪

♪ I’m no dreamer ♪

[both growling]

[moaning]

[screaming]

[glitter chiming]

[dramatic retro dance music playing]

[glitter chimes]

[both snarl]

[Ken hisses]

[Kens] ♪ Ken ♪

♪ Ken ♪

♪ Can you feel? ♪

♪ Can’t you? ♪

♪ Ken ♪

♪ They are, you are, we are ♪

[ballad music resumes]

♪ I’m just Ken ♪

♪ Anywhere else I’d be a ten ♪

♪ Is it my destiny to live and die ♪

♪ A life of blonde fragility? ♪

[laughs]

♪ I’m just Ken ♪

♪ Where I see love she sees a friend ♪

♪ What will it take for her ♪

♪ To see the man behind the tan ♪

♪ And fight for me? ♪

♪ I’m just Ken ♪

[Kens] ♪ And I’m enough ♪

♪ And I’m great at doing stuff ♪

♪ So, hey, check me out ♪

♪ Yeah, I’m just Ken ♪

♪ My name’s Ken ♪

♪ And so am I ♪

♪ Put that manly hand in mine ♪

♪ So, hey, world, check me out ♪

♪ Yeah, I’m just Ken ♪

♪ Baby, I’m… ♪

♪ Nobody else, nobody else ♪

♪ …just Ken ♪

♪ I’m just Ken ♪

[music ends]

[Ken chuckles]

Ken! Ken.

Huh? Yeah?

Weren’t we supposed to vote today?

What?

To change the Constitution.

Oh, it was today, wasn’t it?

Yeah.

[excited chatter]

[President Barbie] Okay, ladies, let’s do this.

All those in favor of letting Barbie Land be Barbie Land, say “Aye.”

[Barbies] Aye!

[all cheering]

[uplifting music playing]

I’m so happy.

[Barbies chanting] Go, Barbie! Go, Barbie! Go, Barbie! Go, Barbie!

Go, Barbie! Go, Barbie! Go, Barbie! Go, Barbie!

[Kens galloping]

Is it just my imagination, or did these Mojo Dojo Casa Houses just get dreamier?

That’s because they’re Dreamhouses, mother… [bleep].

[Kens gasp]

[President Barbie] That’s right.

We’ve reinstated the Barbie Land Constitution to what it should be.

And restored all the Barbies’ brains and autonomy.

[Barbies cheering]

Yes!

And we seriously disinfected those houses.

What do we do?

[Ken breathing heavily]

[in deep voice] Kens!

Who are we attacking, sir?

No…

[Ken chuckles nervously]

No…

[cries dramatically]

Don’t look at me!

[whispering] Is he crying?

Just give us a minute.

[Ken sobbing in distance]

[breath shudders]

Ken.

[continues sobbing]

Are you okay?

Yeah. Totally.

[Barbie] It’s okay if you’re crying.

You know, I cried too. It’s actually kind of amazing.

[Ken] I’m a liberated man. I know crying is not weak.

[Barbie] Okay.

[crying softly]

You wanna sit up for a minute?

[grunts]

[sighs]

This, uh…

It was hard running stuff.

I didn’t love it. [cries]

I get it.

[exhales]

And those mini-fridges are so small.

[Barbie] Mm-hmm.

You could only fit a six pack in them.

[crying] And the freezers are basically useless.

To be honest, when I found out that patriarchy wasn’t about horses,

I lost interest anyway.

That’s okay.

[sniffles]

I always thought this would be our house. [chuckles]

Oh.

[Ken sobs loudly]

Ken.

[sobbing and muttering]

I think I owe you an apology.

Huh?

I’m really sorry I took you for granted.

Oh.

Not every night had to be girls’ night.

[sighs] Thank you for saying that.

[sniffles] Thank you.

Oh. I didn’t mean to suggest, uh…

I just don’t know who I am without you.

You’re Ken.

But it’s “Barbie and Ken.”

There is no just “Ken.”

That’s why I was created.

I only exist within the warmth of your gaze.

Without it,

I’m just another blond guy who can’t do flips.

[dramatic music plays]

[grunts]

[crowd gasps]

[gasping]

Maybe it’s time to discover who Ken is.

Okay. I think I get it now.

Okay. [chuckles]

No, no, no! This isn’t the answer.

[smacks]

[crowd gasps]

[Ken] I feel so stupid.

[Pompadour Ken] No.

[Tall Ken] No.

[crying] I look so stupid.

[Barbies] Yeah.

I look so stupid!

No! [crying]

So cool. You look so cool.

Okay. Ken, you have to figure out who you are without me.

[sighs] Why?

You’re not your girlfriend.

You’re not your house, you’re not your mink.

Beach?

[Barbie] Nope.

You’re not even beach.

Maybe all the things that you thought made you you aren’t… really you.

Maybe it’s Barbie and… it’s Ken.

Ken is… me?

Yes.

Ken is me!

And I’m Barbie.

[soft uplifting music playing]

Ken… is me!

Ken is me!

Ken is me!

Ken is me!

[Ken laughs]

I don’t even care about being Ken anymore.

I just miss my friend Barbie!

That’s cool!

Barbie!

[gasps]

I’m right here.

Ken!

[ding]

[dramatic musical sting]

I want you to have it.

Aw. That’s nice.

[sentimental music playing]

We were only fighting because we didn’t know who we were.

Ken is me!

[laughing]

[Mattel CEO laughing]

Ken is right.

It’s just so hard to be a leader.

You know?

That’s my boss.

It’s… [screams] Oh.

Midge, gosh.

I thought we discontinued her.

[panting]

Look, do you know how many times I’ve wanted to stand up in a board meeting and just say,

“Can we just tickle each other?”

Really?

Let’s have a company retreat and just tickle each other.

[executives laughing]

Someone get me. Someone get me.

[all laughing]

I love being tickled.

[Kens laugh]

No, no, no. Don’t hug me. Don’t hug me.

[sighs]

But thanks to the Barbies, I, too, can now relieve myself of this heavy existential burden while holding on to the very real title of CEO.

And we can restore everything in Barbie Land to exactly the way it was.

Mister Mattel, I just…

Please. Call me Mother.

No, thank you.

I don’t think that things should go back to the way that they were.

No Barbie or Ken should be living in the shadows.

Or Allan.

Hey.

Me?

Yeah.

Oh. Hello.

I just want to say, I’m sorry we called you Weird Barbie behind your back and also to your face.

That’s okay. I’m owning it.

Would you like a job in my cabinet?

May I please have sanitation?

It’s yours.

Yeah, thank you.

[President Barbie] All right.

Madam President.

Oh.

Please, may the Kens have one Supreme Court Justice?

Oh, I can’t do that. But maybe a lower circuit court judgeship.

We accept. As long as we can wear robes.

[narrator] Well, the Kens have to start somewhere.

And one day, the Kens will have as much power and influence in Barbie Land as women have in the Real World.

No, I don’t want to.

Just go!

I can’t.

Grow up and go.

I have an idea.

Tell me your secret dream, child.

Okay, what about Ordinary Barbie?

She’s not extraordinary. She’s not president of anything, or maybe she is.

Maybe she’s a mom. Maybe she’s not.

Because it’s okay to just want to be a mom, or to wanna be president or a mom who is president.

Or not a mom who’s also not president.

She just has a flattering top, and she wants to get through the day feeling kinda good about herself.

That’s a terrible idea.

Yeah, that’s going to make money.

Oh. Ordinary Barbie. I love it. Fantastic.

Okay, great.

Great.

Cool.

Yes.

We good?

I think we’re good, right?

All right, let’s begin the work to close the portal between our two worlds.

Hey, what about Barbie?

What do you mean?

[crowd] Yeah, what about Barbie?

What’s her ending? What does she get?

Well, that’s easy. She’s in love with Ken.

[crowd] Aw.

That is not her ending.

[groans in frustration]

I’m not in love with Ken.

[crowd] Oh.

What do you want?

I don’t know. I’m… I’m not really sure where I belong anymore.

I don’t think I have an ending.

[Ruth] That was always the point.

I created you so you wouldn’t have an ending.

It’s you.

You’re Ruth from Mattel.

Baby, I am Mattel.

Until the IRS got to me, but that’s another movie.

So, you’re…

Ruth Handler. Inventor of Barbie.

[crowd gasps]

What?

That’s so cool.

Her ghost keeps an office on the 17th floor.

[Ruth] What?

What?

[Ruth] You guys, you think the lady who invented Barbie looks like Barbie?

[laughing] I’m a five-foot-nothing grandma with a double mastectomy… and tax evasion issues. [laughing]

Nobody looks like Barbie, except, of course, Barbie. Take a bow, honey.

I don’t really feel like Barbie anymore.

Come, walk with me.

[solemn music playing]

Thank you.

Thank you, Barbie.

Thank you.

I’m not really sure what I’m supposed to do now.

I’ve always been Stereotypical Barbie, and I don’t think I’m really good at anything else.

You saved Barbie Land from patriarchy.

That was very much a group effort.

And you helped that mother and daughter connect.

They really helped each other.

Maybe you’re Self-Effacing Barbie?

Maybe I’m not Barbie anymore.

You understand that humans only have one ending.

Ideas live forever, humans not so much.

You know that, right?

I do.

Being a human can be pretty uncomfortable.

I know.

Humans make things up like patriarchy and Barbie just to deal with how uncomfortable it is.

I understand that.

And then you die.

[chuckles softly]

Yeah.

Yeah.

I want to be a part of the people that make meaning.

Not the thing that’s made.

I want to do the imagining. I don’t wanna be the idea.

Does that make sense?

I always knew that Barbie would surprise me, but I never expected this.

Do you give me permission to become human?

You don’t need my permission.

But you’re the creator. You… Don’t you control me?

[Ruth] I can’t control you any more than I can control my own daughter.

I named you after her, Barbara.

And I always hoped for you like I hoped for her.

We mothers stand still so our daughters can look back to see how far they’ve come.

So, being human’s not something I need to… ask for or even want? I can just…

It’s something that I just discover I am?

I can’t in good conscience let you take this leap without you knowing what it means.

Take my hands.

Now close your eyes.

[wind blowing]

[pensive music playing]

Now feel.

[wind blowing]

[“What Was I Made For?” playing]

♪ I used to float ♪

♪ Now I just fall down ♪

[heart beating]

♪ I used to know ♪

♪ But I’m not sure now ♪

♪ What I was made for ♪

[leaves rustling]

[wind howling]

♪ What was I made for? ♪

♪ ‘Cause I… ‘Cause I… ♪

♪ I don’t know how to feel ♪

♪ But I want to try ♪

♪ I don’t know how to feel ♪

♪ But someday I might ♪

♪ Someday I might ♪

♪ Oh, oh… ♪

Yes.

[wind blowing]

[seagulls squawking]

[narrator] So, Barbie left behind the pastels and plastics of Barbie Land for the pastels and plastics of Los Angeles.

Okay. Thanks for the lift.

[sighs] You got this.

I’m really proud of you.

Estoy muy orguoso de ti.

Orgulloso.

Orgulloso… Orgulloso de ti.

There you go. Close enough.

You guys are the best. Thank you. Thank you.

Okay. Whew! Let’s do this.

Si se puede.

That’s a political statement.

That’s appropriation, Dad.

[Sasha’s dad] Whoo-hoo!

[Sasha’s mom] We’ll be here when you’re done.

We love you!

You got this!

Bye!

Okay.

We love you!

[intriguing music playing]

Hi.

[receptionist] Name?

Oh, um, Handler, comma, Barbara.

[receptionist] And what are you here for today, Barbara?

I’m here to see my gynecologist.

[“Barbie World (With Aqua)” playing]

♪ And I’m bad like the Barbie ♪

♪ Barbie ♪

♪ I’m a doll but I still wanna party ♪

♪ Party ♪

♪ Pink ‘Vette like I’m ready to bend ♪

♪ Bend ♪

♪ I’m a ten so I pull in a Ken ♪

♪ Like Jazzie, Stacie, Nicki ♪

♪ Grrah ♪

♪ All of the Barbies is pretty ♪

♪ Damn ♪

♪ All of the Barbies is bad ♪

♪ It girls and we ain’t playin’ tag ♪

♪ Grrah ♪

♪ Rad, but he spank me when I get bad ♪

♪ I’m in LA, Rodeo Drive ♪

♪ Drive ♪

♪ I’m in New York, Madison Ave ♪

♪ I’m a Barbie girl Pink Barbie Dreamhouse ♪

♪ The way Ken be killin’… ♪

♪ Got me yellin’ out like the Scream house ♪

♪ Yellin’ out, we ain’t sellin’ out ♪

♪ We got money, but we ain’t lendin’ out ♪

♪ We got bars, but we ain’t bailin’ out ♪

♪ In that pink Ferrari, we peelin’ out ♪

♪ I told Tae bring the Bob Dylan out ♪

♪ That… so cold, we just chillin’ out ♪

♪ They be yellin’, yellin’, ye-yellin’ out ♪

♪ It’s Barbie, bitch, if you still in doubt ♪

♪ And I’m bad like the Barbie ♪

♪ Barbie ♪

♪ I’m a doll but I still wanna party ♪

♪ Party ♪

♪ Pink ‘Vette like I’m ready to bend ♪

♪ Bend ♪

♪ I’m a ten so I pull in a Ken ♪

♪ Like Jazzie, Stacie, Nicki ♪

♪ Grrah ♪

♪ All of the Barbies is pretty ♪

♪ Damn ♪

♪ All of the Barbies is bad ♪

♪ It girls and we ain’t playin’ tag ♪

♪ Barbie ain’t nothin’ to play ’bout ♪

♪ He wanna play in the playhouse ♪

♪ Playhouse ♪

♪ The… they gon’ say now? ♪

♪ I’m washin’ these bitches, I’m rubbin’ the stain out ♪

♪ Like I’m ready to bend ♪

♪ All the fake Barbies just wanna pretend ♪

♪ Like hold on, let me go find me a pen ♪

♪ Look where it led, now I’ma put it to bed ♪

♪ She a Barbie bitch with her Barbie clique ♪

♪ I keep draggin’ her, so she bald a bit ♪

♪ And I see the bread, I want all of it ♪

♪ And I want the green, so I olive it ♪

♪ And I throw it back, so he losin’ it ♪

♪ And I give the box with no shoes in it ♪

♪ Yeah, I know the trick so I got him bricked ♪

♪ Yeah, they know who lit, me and Barbie, bitch ♪

♪ And I’m bad like the Barbie ♪

♪ Barbie ♪

♪ I’m a doll but I still wanna party ♪

♪ Party ♪

♪ Pink ‘Vette like I’m ready to bend ♪

♪ Bend ♪

♪ I’m a ten so I pull in a Ken ♪

♪ Like Jazzie, Stacie, Nicki ♪

♪ Grrah ♪

♪ All of the Barbies is pretty ♪

♪ Damn ♪

♪ All of the Barbies is bad ♪

♪ It girls and we ain’t playin’ tag ♪

♪ I’m a Barbie girl in the Barbie world ♪

♪ Life in plastic, it’s fantastic ♪

♪ You can brush my hair, undress me everywhere ♪

♪ Imagination, life is your creation ♪

♪ You can touch, you can play ♪

♪ If you say I’m always yours ♪

[“What Was I Made For?” playing]

♪ I used to float ♪

♪ Now I just fall down ♪

♪ I used to know ♪

♪ But I’m not sure now ♪

♪ What I was made for ♪

♪ What was I made for? ♪

♪ Takin’ a drive I was an idea ♪

♪ Look so alive Turns out I’m not real ♪

♪ Just something you paid for ♪

♪ What was I made for? ♪

♪ ‘Cause I… I… ♪

♪ I don’t know how to feel ♪

♪ But I wanna try ♪

♪ I don’t know how to feel ♪

♪ But someday I might ♪

♪ Someday I might ♪

[vocalizing]

♪ When did it end? All the enjoyment ♪

♪ I’m sad again Don’t tell my boyfriend ♪

♪ It’s not what he’s made for ♪

♪ What was I made for? ♪

♪ ‘Cause I… ‘Cause I… ♪

♪ I don’t know how to feel ♪

♪ But I wanna try ♪

♪ I don’t know how to feel ♪

♪ But someday I might ♪

♪ Someday I might ♪

♪ Think I forgot how to be happy ♪

♪ Something I’m not but something I can be ♪

♪ Something I wait for ♪

♪ Something I’m made for ♪

♪ Something I’m made for ♪

[instrumental music playing]

THE END
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)