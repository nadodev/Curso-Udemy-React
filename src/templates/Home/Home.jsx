import { Component} from 'react'
import {loadPosts} from '../../utils/load-posts'
import { Posts } from '../../components/Posts';
import Button from '../Button';
import { TextInput } from '../../components/TextInput';

class Home extends Component {
    state = {
    posts: [],
    allPosts: [],
    page:0,
    postsPerPage: 4,
    searchValue: ''
}

async componentDidMount() {
  await this.loadPosts();
}

loadPosts = async () => {
  const {page, postsPerPage} = this.state;
  const postsAndPhotos = await loadPosts();
  this.setState({
    posts: postsAndPhotos.slice(page, postsPerPage),
    allPosts: postsAndPhotos,
  });
  }

    loadMorePosts = () => {
      const{
        page, postsPerPage, allPosts, posts
      }= this.state;
      const nextPage = page + postsPerPage;
      const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
      posts.push(...nextPosts);
      this.setState({posts, page: nextPage})
    }

    handleChange = (e) => {
  const {value} = e.target;
  this.setState({searchValue: value});
    }

  render(){
    const {posts, page, postsPerPage, allPosts, searchValue} = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const filteredPosts = !!searchValue ? allPosts.filter(post=>{
      return post.title.toLowerCase().includes(
        searchValue.toLowerCase());
    }) : posts;
    return(
        <section className="container">
          
         

            <TextInput  searchValue={searchValue}
              handleChange={this.handleChange}
            />

         <div className="meio">
         {!!searchValue && (
            <>
            <h1 className="pesq">Pesquisar: {searchValue}</h1>
            </>
          )}
         {filteredPosts.length === 0 && (
            <p className="post-nao">Não existe posts, com essa pesquisa!</p>
          )}

         {filteredPosts.length> 0 && (
            <Posts  posts={filteredPosts}/>
          )}
       
       
         
          </div>
          {!searchValue && (
            <Button  
            onClick={this.loadMorePosts}
            text={"Carregar mais Posts"}
            disabled={noMorePosts}

            />
          )}
           
        </section>
    )
  }
}
export default Home;