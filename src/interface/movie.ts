interface MovieTS {
  status: boolean
  msg: string
  type: string
  movie: {
    modified: {
      time: string
    }
    _id: string
    name: string
    origin_name: string
    content: string
    type: string
    status: string
    thumb_url: string
    is_copyright: string
    trailer_url: string
    time: string
    episode_current: string
    episode_total: string
    quality: string
    lang: string
    notify: string
    showtimes: string
    slug: string
    year: number
    actor: string[]
    director: string[]
    category: string[]
    country: {
      name: string
    }[]
    chieurap: boolean
    poster_url: string
  }
  episodes: {
    server_name: string
    server_data: {
      name: string
      slug: string
      filename: string
      link_embed: string
      link_m3u8: string
    }[]
  }[]
}

export default MovieTS
