package dev.ticus.movies;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collation = "movies")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Movie {
    @Id
    private int objectID;

    private String imdbID,
            title,
            releaseDate,
            trailerLink,
            poster;

    private List<String> genres, 
            backdrops;

    @DocumentReference
    private List<Review> reviewIDs;
}