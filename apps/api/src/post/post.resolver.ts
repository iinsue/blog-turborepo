import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { Resolver, Query } from '@nestjs/graphql';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => [Post], { name: 'posts' })
  findAll() {
    return this.postService.findAll();
  }
}
