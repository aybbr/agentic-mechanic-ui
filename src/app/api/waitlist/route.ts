import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  country: z.string().min(2),
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

    // Append to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Waitlist!A:E', // Assumes sheet is named "Waitlist" with columns A-E
      valueInputOption: 'RAW',
      requestBody: {
        values: [[
          timestamp,
          validatedData.firstName,
          validatedData.lastName,
          validatedData.email,
          validatedData.country,
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
