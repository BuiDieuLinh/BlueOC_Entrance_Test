import React, { useState } from 'react';
import { useCreatePostMutation, useGetAllPostsQuery } from '../services/apiPosts';
import ModalPost from '../component/PostForm';

interface Posts {
  userId: number; 
  id: number;
  title: string;
  body: string;
}
export default function PostsManagement() {
  const { data: posts, isLoading: loadingPosts, error: errorPost } = useGetAllPostsQuery(undefined);
  const [addPost] = useCreatePostMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Định nghĩa kiểu rõ ràng cho posts
  const typedPosts = posts as Posts[] | undefined;

  if (loadingPosts) {
    return <div style={{ textAlign: 'center', padding: '20px' }}>Loading posts...</div>;
  }

  if (errorPost) {
    return <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
      Error: {JSON.stringify(errorPost)}
    </div>;
  }

  const handleAddPost = async (newPost: {title: string; body: string }) => {
    try {
      const response = await addPost(newPost);
      console.log('Post added: ', response.data);
      alert('Post added successfully!')
    } catch (error) {
      console.error('Error adding post: ', error);
    }
  };

  return (
    <div>
        <header
            style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#1e1e2f',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '60px',
            padding: '0 30px',
            zIndex: 9,
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
        >
            <h3 style={{ color: '#f2f2f2', margin: 0, fontSize: '20px' }}>📋 Posts Management</h3>
            <button
            onClick={() => setIsModalOpen(true)}
            style={{
                color: '#fff',
                backgroundColor: '#4A90E2',
                padding: '10px 16px',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056B3')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4A90E2')}
            >
            + Add Post
            </button>
        </header>

        <main style={{ marginTop: '70px', padding: '0 30px' }}>
            <div
            style={{
                maxHeight: '500px',
                overflowY: 'auto',
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none', 
            }}
            >
            <table
                style={{
                width: '100%',
                borderCollapse: 'collapse',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                }}
            >
                <thead>
                <tr>
                    {['User', 'Title', 'Content'].map((label) => (
                    <th
                        key={label}
                        style={{
                        position: 'sticky',
                        top: 0,
                        backgroundColor: '#f4f4f4',
                        borderBottom: '2px solid #ccc',
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: 'bold',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        zIndex: 1,
                        }}
                    >
                        {label}
                    </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {typedPosts?.map((post) => (
                    <tr
                    key={post.id}
                    style={{
                        backgroundColor: '#fff',
                        transition: 'background-color 0.3s',
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = '#f9f9f9')
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = '#fff')
                    }
                    >
                    <td style={{border: '1px solid #ddd', padding: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '250px',}}>{post.userId}</td>
                    <td style={{border: '1px solid #ddd', padding: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '150px',}}>{post.title}</td>
                    <td style={{border: '1px solid #ddd', padding: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '250px',}}>{post.body}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>

            <ModalPost
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAddPost={handleAddPost}
            />
        </main>
    </div>
  );
}