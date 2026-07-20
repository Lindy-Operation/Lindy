// Chart Draw — Privacy Policy (English)
// ⚠️ Never edit the body of a version that has taken effect — it is an archived record.
// ⚠️ This document must match what the code actually does. Declaring data you do not
//    collect creates a mismatch with the Play Data Safety form and Apple's privacy label.
//    (Exception: corrections before launch while zero users are bound. Not after.)
// Payments are out of scope for v1.0. Add collection/retention clauses in v1.1 when they ship.

const V1_0 = `
Lindy Operation Inc. (the "Company") complies with the Personal Information Protection Act
of the Republic of Korea and related laws. This Privacy Policy explains how the Company
handles personal data of users of Chart Draw (the "Service").

- **Service**: Chart Draw (차트드로우)
- **Operator**: Lindy Operation Inc. (주식회사 린디오퍼레이션)
- **Business Registration No.**: 193-87-03843
- **Address**: 808-A128, Yueun Tower 3, 1092 Gyeongui-ro, Paju-si, Gyeonggi-do, Republic of Korea
- **Effective**: July 21, 2026

> This English text is provided for convenience. In the event of any conflict between this
> translation and the Korean version, **the Korean version prevails**.

---

## Article 1 (General)

① This Policy applies to all users of the Service.

② **All learning features of the Service are available without an account.** If you use the
Service without creating an account, the Company collects no personal data whatsoever, and
your learning records are stored solely on your device.

③ Personal data is collected **only when you create an account**. The Service contains no payment functionality.

## Article 2 (Personal Data Collected)

① On account creation (social sign-in)

| Type | Items |
|---|---|
| Required | Email address, social account identifier |
| Optional | Name or nickname (where provided by the social service) |

- If you sign in with Apple and choose **Hide My Email**, the Company receives the relay
  address issued by Apple rather than your actual email address.
- The Company does not collect passwords for social services.

② Data generated through use of the Service

- Learning records: quiz results, number of attempts, scores, accuracy rate, participation
  dates

③ The Company does not collect advertising identifiers, location data, contacts, photos, or
call logs, and does not include third-party advertising or analytics SDKs in the Service.

## Article 3 (Purposes of Processing)

| Purpose | Items processed |
|---|---|
| Member identification and session maintenance | Email address, social account identifier |
| Storing and synchronizing learning records across devices | Learning records, social account identifier |
| Responding to inquiries and handling disputes | Email address |

The Company does not use personal data for purposes other than those listed above. Where a
purpose changes, separate consent will be obtained.

## Article 4 (Retention Period)

① The Company retains personal data **until the Member withdraws** and deletes it without
undue delay upon withdrawal.

② Because the Service contains no payment functionality, there are no transaction records
retained separately under the Act on Consumer Protection in Electronic Commerce. If payment
functionality is introduced in the future, the items and retention periods required by that
Act will be stated in this Policy before such functionality takes effect.

## Article 5 (Provision to Third Parties)

The Company does not provide users' personal data to third parties, except where required by
lawful process from investigative or other competent authorities.

## Article 6 (Outsourcing of Processing)

The Company outsources the processing of personal data as follows.

| Processor | Scope of work | Retention |
|---|---|---|
| Supabase, Inc. | Operation of database and authentication infrastructure | Until termination of the outsourcing agreement or destruction of the personal data |

- The processor's facilities are located in the **Seoul region, Republic of Korea**, and
  personal data is **not transferred overseas**.
- The Company reflects safeguards for the secure handling of personal data in the
  outsourcing agreement and supervises the processor's compliance.

## Article 7 (Destruction of Personal Data)

① The Company destroys personal data without undue delay once the retention period has
elapsed or the processing purpose has been achieved.

② Method of destruction

- Electronic files: permanently deleted by technical means that prevent recovery
- Printed materials: shredded or incinerated

## Article 8 (Your Rights and How to Exercise Them)

① You may at any time request **access to, correction of, deletion of, or suspension of
processing of** your personal data.

② You can delete your account and personal data directly using the **account deletion
function on the [Settings] screen within the Service**. Deletion also removes the learning
records stored on the server, and they cannot be recovered.

③ If you are unable to use the app, you may send a request to danny@lindyoperation.com. The
Company will verify your identity, act on the request **within 10 days**, and notify you of
the outcome.

④ If you used the Service without an account, the learning records stored on your device are
removed by running [Settings > Reset records] within the Service or by deleting the app.

## Article 9 (Children Under 14)

The Company does not collect personal data from children under the age of 14, and **users
under 14 cannot create an account.** Children under 14 may still use the learning features of
the Service without an account, in which case no personal data is collected.

## Article 10 (Security Measures)

The Company takes the following measures:

- Encryption in transit (HTTPS/TLS)
- Minimization of database access privileges and row-level access control
- Minimization of personnel handling personal data and management of their access rights
- Use of social sign-in so that no passwords are stored by the Company

## Article 11 (Privacy Officer)

The officer responsible for personal data processing and for handling user complaints and
remedies is:

- **Privacy Officer**: Daehun Lee (Chief Executive Officer)
- **Contact**: danny@lindyoperation.com

## Article 12 (Remedies for Infringement)

If you need redress for infringement of your personal data rights, you may contact the
following bodies.

| Body | Contact |
|---|---|
| Personal Information Dispute Mediation Committee | 1833-6972 (kopico.go.kr) |
| Privacy Infringement Report Center | 118 (privacy.kisa.or.kr) |
| Supreme Prosecutors' Office, Cybercrime Division | 1301 (spo.go.kr) |
| National Police Agency, Cyber Bureau | 182 (ecrm.police.go.kr) |

## Article 13 (Changes to this Policy)

① Where this Policy is amended, the Company will announce the reason for the change and its
effective date within the Service or on the Company's website **at least 7 days in advance**.
For changes that materially affect users' rights, the announcement will be made **at least 30
days in advance** and Members will be notified individually.

② Superseded versions remain available on the Company's website, organized by effective date.

---

**Addendum**

This Policy takes effect on July 21, 2026.
`

export const CHART_DRAW_PRIVACY_EN = [
  {
    version: '1.0',
    effective: '2026-07-21',
    summary: 'Initial publication',
    body: V1_0,
  },
]
