import React, { useState } from 'react';

interface PostFormData {
  title: string;
  body: string;
}

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPost: (post: PostFormData) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onAddPost }) => {
  const [formData, setFormData] = useState<PostFormData>({
    title: '',
    body: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddPost(formData);
    setFormData({ title: '', body: '' }); 
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          width: '400px',
          boxSizing: 'border-box',
        }}
      >
        <h3 style={{ margin: '0 0 15px 0', fontSize: '20px', color: '#0056B3',padding: '5px 0px', textAlign: 'left', borderBottom: '1px solid #ccc' }}>Add New Post</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Title <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                boxSizing: 'border-box', 
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Content <span style={{ color: 'red' }}>*</span>
            </label>
            <textarea
              name="body"
              value={formData.body}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                minHeight: '100px',
                boxSizing: 'border-box', 
                border: '1px solid #ccc',
                borderRadius: '4px',
                resize: 'vertical',
              }}
              required
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="submit"
              style={{
                padding: '8px 20px',
                backgroundColor: '#0056B3',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Add Post
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '8px 20px',
                marginLeft: '10px',
                backgroundColor: '#fff',
                color: '#888',
                border: '1px solid #888',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;