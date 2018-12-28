import React from "react"
import styled from "styled-components"

const Container = styled.div.attrs({
  className: "mh7-ns mh2 ph1",
})`
  margin-top: 31px;
`

const Heading = styled.h1.attrs({
  className: "separat-ns fw5 font-1-ns font-3 dark-pink ma0",
})``

const SubHeading = styled.h2.attrs({
  className: "font-3-ns f4 apercu-ns i-ns dark-pink mb3",
})`
  padding-top: 33px;
  @media (max-width: 40em) {
    line-height: 32px;
  }
`

const Paragraph = styled.p.attrs({
  className: "f6 font-5-ns mid-gray",
})`
  padding-bottom: 27px;

  @media (max-width: 40em) {
    line-height: 29px;
  }
`

const Link = styled.a.attrs({
  className: "underline di mid-gray",
  target: "_blank",
  rel: "noopener noreferrer",
})``

const Faq = () => (
  <Container>
    <Heading>FAQ</Heading>
    <SubHeading>Will memes really be censored?</SubHeading>
    <Paragraph>
      You may be dubious, but the current proposals in Article 13 of the EU’s
      proposed Copyright Directive are worrying. If Article 13 passes, Internet
      platforms rather than Internet users will liable for copyright, which
      means most will resort to automatically censoring content with upload
      filters. Safeguards put in place for memes are voluntary in each EU Member
      state, and in many Member states, memes are{" "}
      <Link href="https://copybuzz.com/copyright/when-lies-are-told-or-how-the-meme-illustration-shows-its-merits/">
        already illegal
      </Link>{" "}
      because they are not considered parody. But that has not led to massive
      enforcement so far. It would under Article 13.
    </Paragraph>
    <SubHeading>Is it just memes?</SubHeading>
    <Paragraph>
      Memes are just the beginning. Theoretically, any content that can be
      copyrighted could be filtered. That includes music, videos, journalism,
      code, photographs, illustrations, and of course - memes. So with a
      ridiculous amount of content being uploaded to the Internet every second,
      there is a huge potential for automated content filters to wrongly censor
      content through ‘false positives’ (as proven by the faults in ContentID).
    </Paragraph>
    <SubHeading>How will Article 13 affect me?</SubHeading>
    <Paragraph>
      Whether a creator or a consumer, everyone who uses the internet will be
      affected by this law — which is why we all need to speak out against it.
    </Paragraph>
    <Paragraph>
      Online platforms required to implement complex filtering systems will be
      held liable for copyright infringement, potentially incurring fines that
      threaten their economic viability.
    </Paragraph>
    <Paragraph>
      If you are a creator or independent business, the content that you upload
      to share with your audience might be deleted without your consent.
    </Paragraph>
    <Paragraph>
      Article 13 would restrict the ability of internet users to consume content
      – meaning they won’t be able to find and enjoy diverse kinds of cultural
      expressions that they have grown accustomed to. The days of communicating
      through gifs and memes, listening to our favourite remixes online, or even
      sharing videos of our friends singing at karaoke might be coming to an
      end.
    </Paragraph>
    <Paragraph>
      Ultimately, the internet culture that has emerged in recent years – a
      culture that enables connections and democratises information – will
      become bureaucratic and restrictive.
    </Paragraph>
    <Paragraph>
      <Link href="https://createrefresh.eu/privacy/">
        See Create.Refresh privacy policy here{" "}
      </Link>
    </Paragraph>
  </Container>
)

export default Faq
