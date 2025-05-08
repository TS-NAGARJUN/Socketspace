// /app/api/search-friends/route.js
import { clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { username } = await request.json();
    
    if (!username || username.trim() === '') {
      return NextResponse.json(
        { error: 'Username is required' },
        { status: 400 }
      );
    }

    // Search for users in Clerk that match the username
    // This assumes you're using Clerk's Node SDK
    const users = await clerkClient.users.getUserList({
      query: username,
      limit: 10,
    });
    
    // Transform the user data to only include what's needed
    const filteredUsers = users.map((user) => ({
      id: user.id,
      username: user.username || `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Anonymous User',
      email: user.emailAddresses.length > 0 ? user.emailAddresses[0].emailAddress : null,
      imageUrl: user.imageUrl,
    }));

    return NextResponse.json({ users: filteredUsers });
    
  } catch (error) {
    console.error('Error searching for users:', error);
    
    return NextResponse.json(
      { error: 'Failed to search for users' },
      { status: 500 }
    );
  }
}