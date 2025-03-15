import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  country: z.string().min(2),
  carOwnership: z.enum(["first_time", "current_owner", "previous_owner"]),
  interestedIn: z.array(z.string()).min(1),
});

// Initialize Google Sheets
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = formSchema.parse(body);

    // Add timestamp
    const timestamp = new Date().toISOString();

    // Format the interests array as a comma-separated string
    const interests = validatedData.interestedIn.join(", ");

    // Append to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Waitlist!A:G', // Updated range to include new columns
      valueInputOption: 'RAW',
      requestBody: {
        values: [[
          timestamp,
          validatedData.firstName,
          validatedData.lastName,
          validatedData.email,
          validatedData.country,
          validatedData.carOwnership,
          interests,
        ]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit to waitlist' },
      { status: 500 }
    );
  }
}
