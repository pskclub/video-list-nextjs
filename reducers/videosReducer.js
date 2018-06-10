import axios from 'axios'

const init = {
  data: [],
  isSuccess: false,
  isError: false,
  isLoading: false,
}

const type = {
  FETCH_VIDEO_LOADING: 'FETCH_VIDEO_LOADING',
  FETCH_VIDEO_SUCCESS: 'FETCH_VIDEO_SUCCESS',
  FETCH_VIDEO_ERROR: 'FETCH_VIDEO_ERROR'
}

const loading = () => {
  return {
    type: type.FETCH_VIDEO_LOADING,
  }
}

const success = (data) => {
  return {
    type: type.FETCH_VIDEO_SUCCESS,
    payload: {
      data: data,
    },
  }
}

const error = (data) => {
  return {
    type: type.FETCH_VIDEO_ERROR,
    payload: {
      data: data,
    },
  }
}

export const fetchVideos = () => {
  return (dispatch) => {
    dispatch(loading())
    return axios.get('https://s3-ap-southeast-1.amazonaws.com/ysetter/media/video-search.json').then(response => {
      dispatch(success(response.data.items))
    })
    .catch(response => dispatch(error(response)))
  }
}

const videosReducer = (state = init, action) => {
  switch (action.type) {
    case type.FETCH_VIDEO_LOADING :
      return {
        ...state,
        isLoading: true,
      }
    case type.FETCH_VIDEO_SUCCESS :
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: action.payload.data,
      }
    case type.FETCH_VIDEO_ERROR :
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        data: action.payload.data,
      }
    default:
      return state
  }
}

export default videosReducer
