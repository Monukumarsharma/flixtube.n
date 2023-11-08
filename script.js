class Post:
    def __init__(self, content):
        self.content = content
        self.likes = 0
        self.dislikes = 0
        self.comments = []

    def like(self):
        self.likes += 1

    def dislike(self):
        self.dislikes += 1

    def add_comment(self, comment):
        self.comments.append(comment)

    def display(self):
        print("Content:", self.content)
        print("Likes:", self.likes)
        print("Dislikes:", self.dislikes)
        print("Comments:")
        for comment in self.comments:
            print("- ", comment)


class SocialMedia:
    def __init__(self):
        self.posts = []

    def create_post(self, content):
        post = Post(content)
        self.posts.append(post)

    def like_post(self, post_index):
        if 0 <= post_index < len(self.posts):
            self.posts[post_index].like()
        else:
            print("Invalid post index")

    def dislike_post(self, post_index):
        if 0 <= post_index < len(self.posts):
            self.posts[post_index].dislike()
        else:
            print("Invalid post index")

    def comment_on_post(self, post_index, comment):
        if 0 <= post_index < len(self.posts):
            self.posts[post_index].add_comment(comment)
        else:
            print("Invalid post index")

    def display_posts(self):
        for i, post in enumerate(self.posts):
            print(f"Post {i}:")
            post.display()
            print("\n")


# Example usage:
if __name__ == "__main__":
    social_media = SocialMedia()

    social_media.create_post("Hello, World!")
    social_media.create_post("Python is awesome!")

    social_media.like_post(0)
    social_media.dislike_post(1)
    social_media.comment_on_post(0, "Great post!")
    social_media.comment_on_post(1, "I disagree!")

    social_media.display_posts()
