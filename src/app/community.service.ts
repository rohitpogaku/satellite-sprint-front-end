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
}
