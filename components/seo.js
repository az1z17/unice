import Head from 'next/head'

export default function SEO({ title, description, image, keywords }) {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <title>
        Muno - Сервис по заказу видео-приветов и поздравлений от знаменитостей
      </title>
      <meta name='description' content='Закажите свое видео уже сегодня' />
      <meta property='og:type' content='website' />
      <meta
        property='og:title'
        content='Muno - Сервис по заказу видео-приветов и поздравлений от знаменитостей'
        key='ogtitle'
      />
      <meta
        property='og:description'
        content='Закажите свое видео уже сегодня'
        key='ogdesc'
      />
      <meta property='og:site_name' content='Muno' key='ogsitename' />
      <meta property='og:image' content={image || '/Logo.svg'} key='ogimage' />
      <meta name='twitter:card' content='summary' />
      <meta
        name='twitter:title'
        content='Muno - Сервис по заказу видео-приветов и поздравлений от знаменитостей
'
      />
      <meta
        name='twitter:description'
        content='Закажите свое видео уже сегодня'
      />
      <meta name='twitter:site' content='Muno' />
      <meta name='twitter:creator' content='Udevs' />
      <meta name='twitter:image' content={image || '/Logo.svg'} />
      <link rel='icon' href='/Favicon.svg' />
    </Head>
  )
}
