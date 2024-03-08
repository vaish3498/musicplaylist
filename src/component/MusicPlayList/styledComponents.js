import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
`
export const ArtistBg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png ');
  height: 450px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export const ArtistName = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 40px;
  font-weight: bold;
`
export const ArtistInfo = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 30px;
  font-weight: 400;
`
export const PlayListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px;
`
export const PlayListHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
`
export const SearchInput = styled.input`
  height: 30px;
  width: 18%;
  padding-left: 10px;
  color: #cbd5e1;
  border: 1px solid #ffffff;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`
export const MusicList = styled.ul`
  padding: 0px;
  margin: 25px;
`
export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NoSongText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
`
