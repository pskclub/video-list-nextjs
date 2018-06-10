const axios = require('axios')

exports.getVideos = async (req, res) => {
  try {
    const result = await axios.get('https://s3-ap-southeast-1.amazonaws.com/ysetter/media/video-search.json')
    res.json(result.data)
  } catch (e) {
    res.json(e)
  }
}
