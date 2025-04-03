import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
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
    const validatedData = newsletterSchema.parse(body);

    // Add timestamp
    const timestamp = new Date().toISOString();

    // Append to Google Sheet's Newsletter tab
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Newsletter!A:B', // Range includes timestamp and email
      valueInputOption: 'RAW',
      requestBody: {
        values: [[
          timestamp,
          validatedData.email,
        ]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter subscription error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}
