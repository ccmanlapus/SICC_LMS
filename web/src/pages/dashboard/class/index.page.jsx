import { useState } from 'react';
import { Avatar, Button, Card, Textarea } from 'flowbite-react';
import { IoAccessibilitySharp } from 'react-icons/io5';

import PageHeader from '@/components/organisms/PageHeader';
import Template from '@/components/templates/Template';

const FilteredCourse = () => {
  const [activeTab, setActiveTab] = useState('Announcement');
  const [isPosting, setIsPosting] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const [postedAnnouncements, setPostedAnnouncements] = useState([]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handlePostAnnouncement = () => {
    if (announcement.trim()) {
      setPostedAnnouncements([...postedAnnouncements, announcement]);
      setAnnouncement('');
      setIsPosting(false);
    }
  };

  const breadcrumbs = [
    {
      href: '/dashboard',
      title: 'Dashboard',
      icon: IoAccessibilitySharp,
    },
    {
      href: '#/dashboard/filteredcourse',
      title: 'Student',
    },
  ];

  return (
    <Template>
      <PageHeader breadcrumbs={breadcrumbs} />
      <div className='size=lg '>
        <Button.Group>
          <Button color='gray' onClick={() => handleTabChange('Announcement')}>
            Announcement
          </Button>
          <Button color='gray' onClick={() => handleTabChange('Classwork')}>
            Classwork
          </Button>
          <Button color='gray' onClick={() => handleTabChange('People')}>
            People
          </Button>
        </Button.Group>
      </div>
      <div>
        {activeTab === 'Announcement' && (
          <div>
            {!isPosting ? (
              <Card
                onClick={() => setIsPosting(true)}
                className='cursor-pointer p-4 max-w-2xl mx-auto'
              >
                <div className='flex items-center gap-3'>
                  <Avatar img='/id.jpg' alt='avatar of Jese' size='md' rounded />
                  <p className='text-sm'>Announce something to the class</p>
                </div>
              </Card>
            ) : (
              <Card className='p-4 max-w-2xl mx-auto'>
                <div className='flex flex-col gap-4'>
                  <Textarea
                    placeholder='Type your announcement here...'
                    value={announcement}
                    onChange={(e) => setAnnouncement(e.target.value)}
                    className='h-32 text-sm'
                  />
                  <Button onClick={handlePostAnnouncement} size='sm'>
                    Post
                  </Button>
                </div>
              </Card>
            )}
            <div className='mt-4 max-w-2xl mx-auto'>
              {postedAnnouncements.map((ann, index) => (
                <Card key={index} className='p-3 mt-2'>
                  <div className='flex items-center gap-3'>
                    <Avatar img='/id.jpg' alt='avatar of Jese' size='md' rounded />
                    <p className='text-sm'>{ann}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'Classwork' && (
          <Card>
            <div className='flex grid gap-3 mb-6 md:grid-cols-2'>
              <p>Classwork content goes here</p>
            </div>
          </Card>
        )}
        {activeTab === 'People' && (
          <Card>
            <div className='flex grid gap-3 mb-6 md:grid-cols-2'>
              <p>People content goes here</p>
            </div>
          </Card>
        )}
      </div>
    </Template>
  );
};

export default FilteredCourse;
