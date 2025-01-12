// function loadPosts() {
//   $.get('/api/posts', (posts) => {
//     for (let p of posts) {
//       $('#posts-container').append(
//         $(`
//         <div class="col-4">
//           <div class="card m-2">
//             <div class="card-body">
//               <h5 class="card-title">${p.title}</h5>
//               <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
//               <p class="card-text">
//                 ${p.body.substr(0, 200)}
//                 <a href="#">...read more</a>
//               </p>
//               <a href="#" class="card-link">Comment</a>
//               <a href="#" class="card-link">Like</a>
//             </div>
//           </div>
//         </div>
        
//         `)
//       )
//     }
//   })
// }


// function loadPosts() {
//   $.get('/api/posts', (posts) => {
//     for (let p of posts) {
//       const shortBody = p.body.substr(0, 200); // Shortened version for preview
//       const fullBody = p.body; // Full post content

//       $('#posts-container').append(
//         $(`
//         <div class="col-4">
//           <div class="card m-2">
//             <div class="card-body">
//               <h5 class="card-title">${p.title}</h5>
//               <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>

//               <!-- Short content with Read More -->
//               <p class="card-text short-content">
//                 ${shortBody}
//                 <span class="read-more-link" style="color: #DC6866; cursor: pointer;">...read more</span>
//               </p>

//               <!-- Full content with Read Less -->
//               <p class="card-text full-content d-none">
//                 ${fullBody}
//               </p>

//               <span class="read-less-link d-none" style="color: #DC6866; cursor: pointer; display: block; margin-top: 10px;">...read less</span>

//               <!-- Action links separated from content -->
//               <div class="d-flex justify-content-between mt-2">
//                 <a href="#" class="card-link">Comment</a>
//                 <a href="#" class="card-link">Like</a>
//               </div>
//             </div>
//           </div>
//         </div>
//         `)
//       );
//     }

//     // Add click event listener for "Read More"
//     $('.read-more-link').on('click', function () {
//       $(this).closest('.card-body').find('.short-content').addClass('d-none');
//       $(this).closest('.card-body').find('.full-content, .read-less-link').removeClass('d-none');
//     });

//     // Add click event listener for "Read Less"
//     $('.read-less-link').on('click', function () {
//       $(this).closest('.card-body').find('.full-content, .read-less-link').addClass('d-none');
//       $(this).closest('.card-body').find('.short-content').removeClass('d-none');
//     });
//   });
// }


function loadPosts() {
  $.get('/api/posts', (posts) => {
    for (let p of posts) {
      const shortBody = p.body.substr(0, 200); // Shortened version for preview
      const fullBody = p.body; // Full post content

      // Initialize like count (assuming it's fetched from the server)
      let likeCount = p.likes || 0; // Default to 0 if not provided
      let commentCount = p.comments ? p.comments.length : 0; // Assuming comments are part of the post object

      // Append the post to the container
      $('#posts-container').append(
        $(`<div class="col-4" data-post-id="${p.id}">
          <div class="card m-2">
            <div class="card-body">
              <h5 class="card-title">${p.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>

              <!-- Short content with Read More -->
              <p class="card-text short-content">
                ${shortBody}
                <span class="read-more-link" style="color: #DC6866; cursor: pointer;">...read more</span>
              </p>

              <!-- Full content with Read Less -->
              <p class="card-text full-content d-none">
                ${fullBody}
              </p>
              <span class="read-less-link d-none" style="color: #DC6866; cursor: pointer;">...read less</span>

              <!-- Action link with Like and Comment count -->
              <div class="d-flex justify-content-between mt-2">
                <a href="#" class="card-link like-btn" data-likes="${likeCount}">
                  <i class="fas fa-thumbs-up"></i>
                  <span class="like-count">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                    </svg>
                    ${likeCount}
                  </span> 
                </a>
                <a href="#" class="card-link comment-btn">
                  <i class="fas fa-comment"></i>
                  <span class="comment-count">${commentCount} Comments</span>
                </a>
              </div>

              <!-- Comment section -->
              <div class="comment-section d-none">
                <textarea class="form-control comment-textarea" placeholder="Add a comment"></textarea>
                <button class="btn btn-primary mt-2 add-comment-btn">Add Comment</button>
                <div class="comments-list mt-2">
                  <!-- Comment list will appear here -->
                  ${p.comments ? p.comments.map(comment => `<div class="comment mt-2"><strong>${comment.user}</strong>: ${comment.text}</div>`).join('') : ''}
                </div>
              </div>
            </div>
          </div>
        </div>`)
      );
    }

    // Add click event listener for "Read More"
    $(document).on('click', '.read-more-link', function () {
      $(this).closest('.card-body').find('.short-content').addClass('d-none');
      $(this).closest('.card-body').find('.full-content, .read-less-link').removeClass('d-none');
    });

    // Add click event listener for "Read Less"
    $(document).on('click', '.read-less-link', function () {
      $(this).closest('.card-body').find('.full-content, .read-less-link').addClass('d-none');
      $(this).closest('.card-body').find('.short-content').removeClass('d-none');
    });

    // Handle Like button click
    $(document).on('click', '.like-btn', function (e) {
      e.preventDefault(); // Prevent the default link behavior

      // Get the current like count from data-likes attribute
      let currentLikes = parseInt($(this).data('likes'));

      // Increment the like count
      currentLikes++;

      // Update the like count display in the UI
      $(this).find('.like-count').html(`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
        </svg>
        ${currentLikes}
      `);

      // Update the data-likes attribute with the new like count
      $(this).data('likes', currentLikes);
    });

    // Toggle comment section visibility
    $(document).on('click', '.comment-btn', function (e) {
      e.preventDefault();
      const postId = $(this).closest('.card').data('post-id');
      const commentSection = $(this).closest('.card-body').find('.comment-section');
      commentSection.toggleClass('d-none'); // Toggle visibility of the comment section
    });

    // Add new comment
    $(document).on('click', '.add-comment-btn', function () {
      const postId = $(this).closest('.card').data('post-id');
      const commentText = $(this).closest('.comment-section').find('.comment-textarea').val();

      if (commentText.trim()) {
        // For simplicity, add the comment to the UI (real-world would involve an API call to save it)
        const newComment = $('<div class="comment mt-2"><strong>You:</strong> ' + commentText + '</div>');
        $(this).closest('.comment-section').find('.comments-list').append(newComment);
        
        // Clear the textarea
        $(this).closest('.comment-section').find('.comment-textarea').val('');
        
        // Update the comment count
        let commentCount = $(this).closest('.card-body').find('.comment-count');
        let currentCommentCount = parseInt(commentCount.text());
        commentCount.text(`${currentCommentCount + 1} Comments`);
      }
    });
  });
}
