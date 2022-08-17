//统一出口
import { recommendMusic, newSongs } from '@/api/Home'
import { hotSearch, searchResult } from '@/api/Search'
import { getSongById, getLyricById } from '@/api/Play'

export const recommendMusicAPI = recommendMusic //把网络请求方法拿过来导出
export const newSongsAPI = newSongs
export const hotSearchAPI = hotSearch
export const searchResultAPI = searchResult
export const getSongByIdAPI = getSongById
export const getLyricByIdAPI = getLyricById