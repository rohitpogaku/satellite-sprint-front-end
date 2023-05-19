import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  constructor(private http: HttpClient) {
  }

  getAllPosts() {
    return this.http.get("/api/v1/posts");
  }

  getPostById(id: number) {
    return this.http.get(`/api/v1/posts/${id}`);
  }

  uploadPost(data: any) {
    return this.http.post("/api/v1/posts", data);
  }

  updatePost(data: any) {
    return this.http.put("/api/v1/posts", data);
  }

  deletePost(id: any) {
    return this.http.delete(`/api/v1/posts/${id}`);
  }


}
